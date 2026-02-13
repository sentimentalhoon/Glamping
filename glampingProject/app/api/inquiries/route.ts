import { NextResponse } from "next/server";

type InquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  budget?: string;
  preferredVisitDate?: string;
  message?: string;
  consent?: boolean;
  website?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  landingPath?: string;
  referrer?: string;
};

function normalize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^\d]/g, "");
  return digits.length >= 9;
}

function buildAdminMessage(lead: {
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  budget: string;
  preferredVisitDate: string;
  message: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  landingPath: string;
  referrer: string;
}): string {
  return [
    "[멤버십 상담 신규 리드]",
    `접수시각: ${lead.createdAt}`,
    `이름: ${lead.name}`,
    `연락처: ${lead.phone}`,
    `이메일: ${lead.email || "-"}`,
    `관심유형: ${lead.interest}`,
    `예산범위: ${lead.budget || "-"}`,
    `희망방문일: ${lead.preferredVisitDate || "-"}`,
    `메시지: ${lead.message || "-"}`,
    `랜딩경로: ${lead.landingPath || "-"}`,
    `리퍼러: ${lead.referrer || "-"}`,
    `utm_source: ${lead.utmSource || "-"}`,
    `utm_medium: ${lead.utmMedium || "-"}`,
    `utm_campaign: ${lead.utmCampaign || "-"}`,
    `utm_content: ${lead.utmContent || "-"}`,
    `utm_term: ${lead.utmTerm || "-"}`,
  ].join("\n");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as InquiryPayload;

    const name = normalize(body.name);
    const phone = normalize(body.phone);
    const email = normalize(body.email);
    const interest = normalize(body.interest);
    const budget = normalize(body.budget);
    const preferredVisitDate = normalize(body.preferredVisitDate);
    const message = normalize(body.message);
    const website = normalize(body.website);
    const utmSource = normalize(body.utmSource);
    const utmMedium = normalize(body.utmMedium);
    const utmCampaign = normalize(body.utmCampaign);
    const utmContent = normalize(body.utmContent);
    const utmTerm = normalize(body.utmTerm);
    const landingPath = normalize(body.landingPath);
    const referrer = normalize(body.referrer);
    const consent = body.consent === true;

    if (website) {
      return NextResponse.json({ ok: true, message: "accepted" }, { status: 200 });
    }

    if (!name || !isValidPhone(phone) || !interest || !consent) {
      return NextResponse.json(
        { ok: false, message: "필수 항목이 누락되었거나 형식이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    const lead = {
      source: "glamping-membership-site",
      createdAt: new Date().toISOString(),
      name,
      phone,
      email,
      interest,
      budget,
      preferredVisitDate,
      message,
      consent,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
      landingPath,
      referrer,
    };

    const adminMessage = buildAdminMessage(lead);

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookFormat = normalize(process.env.LEAD_WEBHOOK_FORMAT).toLowerCase();
      const webhookBody =
        webhookFormat === "slack"
          ? { text: adminMessage }
          : { lead, message: adminMessage };

      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookBody),
      });

      if (!webhookRes.ok) {
        return NextResponse.json(
          { ok: false, message: "리드 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
          { status: 502 }
        );
      }
    } else {
      console.info("[inquiry:fallback-log]", lead);
    }

    return NextResponse.json({ ok: true, message: "접수되었습니다." }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

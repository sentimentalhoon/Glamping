"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

type LeadForm = {
  name: string;
  phone: string;
  interest: string;
  budget: string;
  preferredVisitDate: string;
  email: string;
  message: string;
  consent: boolean;
  website: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  landingPath: string;
  referrer: string;
};

type MembershipLeadFormProps = {
  mode?: "full" | "short";
  landingPath?: string;
  ctaLabel?: string;
};

export function MembershipLeadForm({
  mode = "full",
  landingPath = "/lp/membership-a",
  ctaLabel = "멤버십 상담 신청",
}: MembershipLeadFormProps) {
  const searchParams = useSearchParams();
  const isShortMode = mode === "short";

  const [form, setForm] = useState<LeadForm>({
    name: "",
    phone: "",
    interest: "personal",
    budget: "",
    preferredVisitDate: "",
    email: "",
    message: "",
    consent: false,
    website: "",
    utmSource: searchParams.get("utm_source") ?? "",
    utmMedium: searchParams.get("utm_medium") ?? "",
    utmCampaign: searchParams.get("utm_campaign") ?? "",
    utmContent: searchParams.get("utm_content") ?? "",
    utmTerm: searchParams.get("utm_term") ?? "",
    landingPath,
    referrer: typeof document !== "undefined" ? document.referrer : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const isValid = useMemo(() => {
    const digits = form.phone.replace(/[^\d]/g, "");
    return form.name.trim().length >= 2 && digits.length >= 9 && form.consent;
  }, [form]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!isValid) {
      setSubmitError("필수 항목을 확인해 주세요.");
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.message ?? "요청 처리에 실패했습니다.");
      }

      setSubmitSuccess("상담 신청이 접수되었습니다. 24시간 이내 연락드리겠습니다.");
      setForm((prev) => ({
        ...prev,
        name: "",
        phone: "",
        budget: "",
        preferredVisitDate: "",
        email: "",
        message: "",
        consent: false,
        website: "",
      }));
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="lead-form" onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/70">성함 *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/60"
            placeholder="홍길동"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/70">연락처 *</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/60"
            placeholder="010-1234-5678"
          />
        </div>
      </div>

      <div className={`grid grid-cols-1 gap-6 ${isShortMode ? "" : "md:grid-cols-2"}`}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/70">관심 유형</label>
          <select
            value={form.interest}
            onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/60"
          >
            <option value="personal">개인 멤버십</option>
            <option value="corporate">법인 멤버십</option>
            <option value="tour">현장 투어 우선 예약</option>
          </select>
        </div>
        {!isShortMode && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70">예산 범위 (선택)</label>
            <select
              value={form.budget}
              onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
              className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/60"
            >
              <option value="">선택 안 함</option>
              <option value="under-10m">1천만원 이하</option>
              <option value="10m-30m">1천만원 ~ 3천만원</option>
              <option value="over-30m">3천만원 이상</option>
            </select>
          </div>
        )}
      </div>

      {!isShortMode && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">희망 방문일 (선택)</label>
              <input
                type="date"
                value={form.preferredVisitDate}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, preferredVisitDate: e.target.value }))
                }
                className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/60"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70">이메일 (선택)</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/60"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70">문의 내용 (선택)</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/60"
              placeholder="희망 일정 또는 문의 내용을 남겨주세요."
            />
          </div>
        </>
      )}

      <input
        type="text"
        value={form.website}
        onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label className="flex items-start gap-3 text-sm text-foreground/70">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
          required
          className="mt-1"
        />
        <span>개인정보 수집 및 상담 연락에 동의합니다. *</span>
      </label>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}
      {submitSuccess && <p className="text-sm text-emerald-700">{submitSuccess}</p>}

      <Button type="submit" size="lg" disabled={!isValid || isSubmitting} className="w-full">
        {isSubmitting ? "접수 중..." : ctaLabel}
      </Button>

      <p className="text-xs text-muted-foreground">
        * 접수 후 영업일 기준 24시간 이내 전담 매니저가 연락드립니다.
      </p>
    </form>
  );
}

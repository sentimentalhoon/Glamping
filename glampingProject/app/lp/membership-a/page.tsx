import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import { MembershipLeadForm } from "@/components/lp/MembershipLeadForm";

export const metadata: Metadata = {
  title: "멤버십 상담 신청 | The Western",
  description:
    "프리미엄 글램핑 회원권 상담 랜딩 페이지. 혜택 비교와 현장 투어 예약을 한 번에 신청하세요.",
  robots: {
    index: false,
    follow: false,
  },
};

const trustPoints = [
  "전담 매니저 1:1 상담",
  "개인/법인 맞춤 제안",
  "현장 투어 우선 예약",
  "24시간 내 응답 원칙",
];

const processSteps = [
  "상담 요청 접수",
  "우선 니즈 확인",
  "현장 투어 및 혜택 설명",
  "멤버십 플랜 제안",
];

export default function MembershipLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-primary text-primary-foreground">
        <div className="container-width py-6 flex items-center justify-between">
          <Link href="/" className="brand-wordmark text-xl">
            The Western
          </Link>
          <a
            href="#lead-form"
            className="text-sm font-medium px-4 py-2 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            상담 신청
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/95 to-primary">
        <div className="container-width py-20 md:py-28 text-white">
          <p className="lp-eyebrow">Membership Private Offer</p>
          <h1 className="lp-title text-4xl md:text-6xl mb-6">
            프리미엄 글램핑 회원권,
            <br />
            당신의 라이프스타일에 맞춰 설계합니다.
          </h1>
          <p className="max-w-3xl text-white/82 text-base md:text-lg leading-[1.85] break-keep mb-10">
            대기 없는 우선 예약, 프라이빗 이용 권한, 자산형 운영 모델까지.
            회원권 도입 전 알아야 할 핵심 혜택을 전담 매니저가 직접 안내합니다.
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
          >
            멤버십 상담 신청
          </a>
        </div>
      </section>

      <section className="py-16 bg-surface border-y border-border/50">
        <div className="container-width grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {trustPoints.map((point) => (
            <div key={point} className="bg-background rounded-xl border border-border p-5 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <p className="font-medium text-foreground/80">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="lp-title text-3xl md:text-5xl text-primary">
              이런 분께 추천합니다
            </h2>
            <ul className="space-y-3 text-foreground/80 leading-[1.85]">
              <li>연간 휴식 계획을 프라이빗하게 운영하고 싶은 개인 고객</li>
              <li>임직원 복지/우수고객 초청을 고민하는 법인 고객</li>
              <li>호텔형 서비스와 자연형 경험을 동시에 원하는 고객</li>
              <li>방문 전 상세 조건을 비교하고 합리적으로 결정하려는 고객</li>
            </ul>

            <div className="pt-6 border-t border-border/60">
              <h3 className="font-serif text-xl font-semibold tracking-[-0.01em] text-primary mb-4">상담 진행 절차</h3>
              <ol className="space-y-3 text-foreground/75">
                {processSteps.map((step, index) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold inline-flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-semibold tracking-[-0.01em] text-primary mb-2">무료 상담 신청</h3>
            <p className="text-foreground/70 mb-6">
              아래 정보를 남겨주시면 가장 적합한 멤버십 플랜을 제안드립니다.
            </p>
            <Suspense fallback={<p className="text-sm text-muted-foreground">폼을 불러오는 중입니다...</p>}>
              <MembershipLeadForm mode="full" landingPath="/lp/membership-a" ctaLabel="멤버십 상담 신청" />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}

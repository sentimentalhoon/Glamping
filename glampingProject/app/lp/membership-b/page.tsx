import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ShieldCheck, Sparkles, Users2 } from "lucide-react";
import { MembershipLeadForm } from "@/components/lp/MembershipLeadForm";

export const metadata: Metadata = {
  title: "VIP 멤버십 빠른 상담 | MachaView Club",
  description:
    "3분 내 상담 요청이 가능한 광고 전용 랜딩. 개인/법인 멤버십 혜택을 빠르게 확인하세요.",
  robots: {
    index: false,
    follow: false,
  },
};

const valueCards = [
  {
    icon: Sparkles,
    title: "우선 예약 권한",
    desc: "성수기 주말에도 우선 순위로 예약 기회를 안내합니다.",
  },
  {
    icon: Users2,
    title: "개인·법인 맞춤 운영",
    desc: "사용 목적에 맞게 투어·이용·제휴 플랜을 단계별로 설계합니다.",
  },
  {
    icon: ShieldCheck,
    title: "전담 매니저 케어",
    desc: "요청 후 24시간 내 전담 매니저가 직접 연락드립니다.",
  },
];

export default function MembershipLandingBPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-foreground">
      <section className="border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="container-width py-5 flex items-center justify-between">
          <Link href="/" className="brand-wordmark text-xl text-primary">
            MachaView Club
          </Link>
          <a
            href="#lead-form"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            빠른 상담 요청
          </a>
        </div>
      </section>

      <section className="container-width py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="lp-eyebrow text-primary/70">Ad Landing Variant B</p>
              <h1 className="lp-title text-4xl md:text-6xl text-primary">
                프리미엄 글램핑,
                <br />
                지금 빠르게 상담받으세요.
              </h1>
              <p className="lp-body max-w-2xl">
                회원권 조건을 길게 탐색하지 않아도 됩니다. 이름과 연락처만 남기면
                전담 매니저가 고객 목적에 맞는 플랜을 빠르게 정리해드립니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {valueCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-border bg-white p-5 shadow-sm"
                >
                  <card.icon className="w-5 h-5 text-secondary mb-3" />
                  <h2 className="font-serif text-xl font-semibold tracking-[-0.01em] text-primary mb-2">{card.title}</h2>
                  <p className="text-sm text-foreground/70 leading-relaxed">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-lg">
            <h2 className="font-serif text-3xl font-semibold tracking-[-0.01em] text-primary mb-2">3분 빠른 상담 요청</h2>
            <p className="text-sm text-foreground/70 mb-6">
              필수 정보만 입력하면 바로 접수됩니다.
            </p>
            <Suspense fallback={<p className="text-sm text-muted-foreground">폼을 불러오는 중입니다...</p>}>
              <MembershipLeadForm
                mode="short"
                landingPath="/lp/membership-b"
                ctaLabel="3분 상담 요청하기"
              />
            </Suspense>
          </aside>
        </div>
      </section>
    </main>
  );
}

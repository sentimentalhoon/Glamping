import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관",
  description: "마차뷰클럽 글램핑장 이용약관",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 bg-surface">
        <div className="container-width py-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl text-primary">이용약관</h1>
          <Link href="/" className="text-sm text-primary hover:text-secondary transition-colors">
            홈으로
          </Link>
        </div>
      </section>

      <section className="container-width py-12 max-w-4xl space-y-10 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">1. 목적</h2>
          <p className="text-foreground/80">
            본 약관은 마차뷰클럽 글램핑장의 웹사이트 및 멤버십 상담 서비스 이용 조건과 절차를 규정합니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">2. 서비스 제공</h2>
          <p className="text-foreground/80">
            회사는 멤버십 상담 신청 접수, 서비스 소개, 방문 투어 안내를 제공합니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">3. 이용자 의무</h2>
          <p className="text-foreground/80">
            이용자는 사실에 기반한 정보를 제공해야 하며, 타인의 권리를 침해하거나 불법적인 내용을 제출해서는 안 됩니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">4. 책임 제한</h2>
          <p className="text-foreground/80">
            천재지변, 시스템 장애 등 회사의 합리적 통제 범위를 벗어난 사유로 서비스 제공이 제한될 수 있습니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">5. 문의처</h2>
          <p className="text-foreground/80">
            서비스 문의: 031-1234-5678 / stay@the-western-glamping.kr
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          시행일: 2026-02-13
        </p>
      </section>
    </main>
  );
}

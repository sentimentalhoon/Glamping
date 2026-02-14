import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "마차뷰클럽 글램핑장 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 bg-surface">
        <div className="container-width py-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl text-primary">개인정보처리방침</h1>
          <Link href="/" className="text-sm text-primary hover:text-secondary transition-colors">
            홈으로
          </Link>
        </div>
      </section>

      <section className="container-width py-12 max-w-4xl space-y-10 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">1. 수집 항목</h2>
          <p className="text-foreground/80">
            멤버십 상담 신청 시 이름, 연락처, 이메일(선택), 희망 방문일(선택), 문의 내용을 수집합니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">2. 이용 목적</h2>
          <p className="text-foreground/80">
            수집한 정보는 멤버십 상담 응대, 방문 일정 조율, 서비스 안내를 위해서만 사용합니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">3. 보유 및 파기</h2>
          <p className="text-foreground/80">
            관련 법령 또는 내부 정책에 따라 보관 후 지체 없이 파기합니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">4. 제3자 제공 및 처리위탁</h2>
          <p className="text-foreground/80">
            법령상 근거가 있거나 정보주체의 동의가 있는 경우를 제외하고 제3자에게 제공하지 않습니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary mb-3">5. 문의처</h2>
          <p className="text-foreground/80">
            개인정보 관련 문의: 031-1234-5678 / stay@the-western-glamping.kr
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          시행일: 2026-02-13
        </p>
      </section>
    </main>
  );
}

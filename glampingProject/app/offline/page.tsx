import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center bg-surface border border-border rounded-2xl p-8 shadow-lg">
        <h1 className="font-serif text-3xl text-primary mb-4">오프라인 상태입니다</h1>
        <p className="text-foreground/75 leading-relaxed mb-6 break-keep">
          네트워크 연결을 확인해 주세요. 연결이 복구되면 자동으로 최신 정보를 불러옵니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            홈으로 이동
          </Link>
          <a
            href="tel:031-1234-5678"
            className="px-5 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
          >
            전화 문의
          </a>
        </div>
      </div>
    </main>
  );
}

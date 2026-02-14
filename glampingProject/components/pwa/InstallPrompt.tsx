"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

function isIos(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

function isStandaloneMode(): boolean {
  if (typeof window === "undefined") return false;
  const isStandaloneMedia = window.matchMedia("(display-mode: standalone)").matches;
  const isNavigatorStandalone =
    typeof navigator !== "undefined" &&
    "standalone" in navigator &&
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
  return isStandaloneMedia || isNavigatorStandalone;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [hidden, setHidden] = useState(false);
  const showIosHint = !isStandaloneMode() && isIos();

  useEffect(() => {
    if (isStandaloneMode() || isIos()) return;

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  if (hidden || isStandaloneMode()) return null;
  if (!showIosHint && !deferredPrompt) return null;

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      setDeferredPrompt(null);
      setHidden(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-6 md:bottom-6 md:max-w-sm">
      <div className="bg-primary text-primary-foreground rounded-2xl shadow-2xl border border-white/15 p-4">
        <p className="text-sm font-semibold mb-2">마차뷰클럽 앱처럼 사용하기</p>
        {showIosHint ? (
          <p className="text-xs text-primary-foreground/80 leading-relaxed mb-3">
            Safari 하단 공유 버튼을 눌러 &quot;홈 화면에 추가&quot;를 선택하면 앱처럼 사용할 수 있습니다.
          </p>
        ) : (
          <p className="text-xs text-primary-foreground/80 leading-relaxed mb-3">
            홈 화면에 추가하면 더 빠른 실행과 오프라인 기본 화면을 사용할 수 있습니다.
          </p>
        )}

        <div className="flex items-center gap-2">
          {!showIosHint && (
            <button
              onClick={install}
              className="px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-white transition-colors"
            >
              앱 설치
            </button>
          )}
          <button
            onClick={() => setHidden(true)}
            className="px-3 py-2 rounded-lg border border-white/25 text-xs text-primary-foreground/85 hover:bg-white/10 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

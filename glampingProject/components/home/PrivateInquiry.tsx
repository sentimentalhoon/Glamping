"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

type InquiryForm = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  budget: string;
  preferredVisitDate: string;
  message: string;
  consent: boolean;
  website: string;
};

const DEFAULT_FORM: InquiryForm = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  budget: "",
  preferredVisitDate: "",
  message: "",
  consent: false,
  website: "",
};

export function PrivateInquiry() {
  const [form, setForm] = useState<InquiryForm>(DEFAULT_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isValid = useMemo(() => {
    const phoneOnlyDigits = form.phone.replace(/[^\d]/g, "");
    return (
      form.name.trim().length >= 2 &&
      phoneOnlyDigits.length >= 9 &&
      form.interest.trim().length > 0 &&
      form.consent
    );
  }, [form]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage(null);
    setSubmitError(null);

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

      setSubmitMessage("상담 신청이 접수되었습니다. 24시간 이내 연락드리겠습니다.");
      setForm(DEFAULT_FORM);
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
    <section id="inquiry" className="section-padding bg-surface">
      <div className="container-width max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subheading text-secondary">Private Invitation</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            멤버십 상담 신청
          </h2>
          <p className="text-foreground/70 mb-8 leading-relaxed break-keep">
            회원권 상품, 이용 방식, 방문 투어 일정까지 전담 매니저가 1:1로 안내합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background border border-border p-8 md:p-12 rounded-sm shadow-xl"
        >
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="성함"
                  required
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Contact *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="연락처"
                  required
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Interest *
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))}
                  required
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg appearance-none cursor-pointer"
                >
                  <option value="">관심 분야를 선택해주세요</option>
                  <option value="corporate">법인 멤버십 상담</option>
                  <option value="personal">개인 멤버십 상담</option>
                  <option value="tour">현장 투어 예약</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Budget (Optional)
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg appearance-none cursor-pointer"
                >
                  <option value="">예산 범위를 선택해주세요</option>
                  <option value="under-10m">1천만원 이하</option>
                  <option value="10m-30m">1천만원 ~ 3천만원</option>
                  <option value="over-30m">3천만원 이상</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Preferred Visit Date (Optional)
              </label>
              <input
                type="date"
                value={form.preferredVisitDate}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, preferredVisitDate: e.target.value }))
                }
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Email (Optional)
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="이메일 주소"
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Message (Optional)
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="상담 희망 일정/문의 내용을 남겨주세요."
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors resize-none text-lg"
              ></textarea>
            </div>

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
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, consent: e.target.checked }))
                }
                className="mt-1"
                required
              />
              <span>개인정보 수집 및 상담 연락에 동의합니다. *</span>
            </label>

            {submitError && (
              <p className="text-sm text-red-600" role="alert">
                {submitError}
              </p>
            )}
            {submitMessage && (
              <p className="text-sm text-emerald-700" role="status">
                {submitMessage}
              </p>
            )}

            <div className="pt-4 text-center">
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="w-full md:w-auto min-w-[300px] text-lg py-6"
              >
                {isSubmitting ? "접수 중..." : "멤버십 상담 신청"}
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">
                * 신청 후 24시간 이내에 전담 매니저가 연락드립니다.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

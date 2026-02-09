"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function PrivateInquiry() {
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
                    <h2 className="display-heading text-foreground mb-6 text-4xl">
                        프라이빗 투어 신청
                    </h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        루미나 글램핑은 100% 사전 예약제 프라이빗 투어로만 공개됩니다.<br />
                        귀하의 여정에 맞추어 전담 컨시어지가 안내해 드립니다.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-background border border-border p-8 md:p-12 rounded-sm shadow-xl"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="성함"
                                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-muted-foreground">Contact</label>
                                <input 
                                    type="tel" 
                                    placeholder="연락처"
                                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-muted-foreground">Purpose</label>
                            <select className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors text-lg appearance-none cursor-pointer">
                                <option>관심 분야를 선택해주세요</option>
                                <option>법인 멤버십 상담</option>
                                <option>개인 멤버십 상담</option>
                                <option>모델하우스 투어</option>
                                <option>기타 문의</option>
                            </select>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message (Optional)</label>
                            <textarea 
                                rows={3}
                                placeholder="특별히 궁금하신 점이 있으시다면 남겨주세요."
                                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-secondary transition-colors resize-none text-lg"
                            ></textarea>
                        </div>

                        <div className="pt-8 text-center">
                            <Button className="w-full md:w-auto min-w-[300px] text-lg py-6 btn-primary">
                                VIP 상담 예약하기
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

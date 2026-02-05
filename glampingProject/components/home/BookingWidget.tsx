"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, CheckCircle } from "lucide-react";

export function BookingWidget() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleCheck = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    return (
        <section id="booking" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-secondary">
                        당신의 자리를 예약하세요
                    </h2>
                    <p className="text-primary-foreground/80 font-light text-lg break-keep">
                        다가오는 시즌 예약이 빠르게 마감되고 있습니다.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white text-foreground rounded-2xl p-8 shadow-2xl"
                >
                    {!success ? (
                        <form onSubmit={handleCheck} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <Calendar size={16} /> 체크인
                                </label>
                                <input
                                    type="date"
                                    required
                                    className="w-full p-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <Calendar size={16} /> 체크아웃
                                </label>
                                <input
                                    type="date"
                                    required
                                    className="w-full p-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <Users size={16} /> 인원
                                </label>
                                <select className="w-full p-3 bg-muted/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50">
                                    <option>성인 2명</option>
                                    <option>성인 3명</option>
                                    <option>성인 4명</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-primary-foreground p-3 rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed h-[50px]"
                            >
                                {loading ? "확인 중..." : "예약 가능 여부 확인"}
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-8"
                        >
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-serif font-bold text-primary mb-2">예약 가능!</h3>
                            <p className="text-muted-foreground mb-6">선택하신 날짜에 예약이 가능합니다.</p>
                            <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-medium tracking-wide hover:brightness-105 transition-all">
                                결제 진행하기
                            </button>
                            <button
                                onClick={() => setSuccess(false)}
                                className="block mx-auto mt-4 text-sm text-muted-foreground underline hover:text-primary"
                            >
                                다른 날짜 확인
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

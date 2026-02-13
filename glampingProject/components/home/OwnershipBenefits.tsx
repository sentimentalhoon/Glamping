"use client";

import { motion } from "framer-motion";
import { Crown, Key, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

const benefits = [
    {
        icon: Crown,
        title: "VVIP Priority",
        description: "최성수기 주말 및 공휴일 우선 예약 권한 제공 (연 12박 보장)"
    },
    {
        icon: Key,
        title: "Private Access",
        description: "멤버십 전용 라운지 및 시크릿 가든 이용 권한"
    },
    {
        icon: Clock,
        title: "Slow Check-out",
        description: "여유로운 14:00 체크아웃 서비스 제공"
    },
    {
        icon: Shield,
        title: "Asset Value",
        description: "엄격한 회원 관리로 유지되는 멤버십 가치와 양도/증여 권한"
    }
];

export function OwnershipBenefits() {
    return (
        <section id="ownership" className="section-padding bg-[#1A2F23] text-white relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

            <div className="container-width relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 lg:sticky lg:top-32"
                    >
                        <span className="section-subheading mb-4">Ownership Privilege</span>
                        <h2 className="display-heading mb-8 text-white">
                            선택된 소수만의<br />
                            <span className="text-white/70">특권</span>
                        </h2>
                        <p className="text-white/68 font-normal leading-[1.85] mb-10 text-base md:text-lg">
                            더 웨스턴 멤버십은 단순한 이용권이 아닙니다.<br />
                            당신의 품격에 걸맞은 하이엔드 라이프스타일 제안입니다.
                        </p>
                        <Button href="/#inquiry" variant="secondary">
                            멤버십 상담 신청
                        </Button>
                    </motion.div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="mb-6 inline-block p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                                    <benefit.icon className="w-8 h-8 text-secondary group-hover:text-[#1A2F23] transition-colors duration-500" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold tracking-[-0.01em] mb-3">{benefit.title}</h3>
                                <div className="w-12 h-[1px] bg-white/20 mb-4 group-hover:w-full group-hover:bg-secondary/50 transition-all duration-700"></div>
                                <p className="text-white/68 font-normal leading-[1.8] break-keep">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

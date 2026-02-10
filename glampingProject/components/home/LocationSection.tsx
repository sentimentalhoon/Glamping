"use client";

import { motion } from "framer-motion";
import { NaverMap } from "@/components/location/NaverMap";

export function LocationSection() {
    return (
        <section id="location" className="section-padding bg-background relative overflow-hidden">
             {/* Background Element */}
             <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

            <div className="container-width">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/3"
                    >
                        <span className="section-subheading text-secondary mb-4">The Location</span>
                        <h2 className="display-heading text-foreground mb-6">
                            세상과 단절된<br />
                            완벽한 고요
                        </h2>
                        <div className="w-16 h-[1px] bg-secondary/50 mb-8"></div>
                        <div className="space-y-6 text-foreground/70 font-light leading-relaxed">
                            <p>
                                변산반도의 붉은 노을이 머무는 곳.<br />
                                고사포 해변의 솔숲과 서해의 파도 소리가 어우러진 
                                더 웨스턴 프라이빗 에스테이트가 당신을 기다립니다.
                            </p>
                            <p>
                                <strong>Address</strong><br />
                                전북 부안군 변산면 노루목길 8-8
                            </p>
                            <p>
                                <strong>Contact</strong><br />
                                02-000-0000 (100% 예약제)
                            </p>
                        </div>
                    </motion.div>

                    {/* Map Visual */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/3 h-[500px] rounded-sm overflow-hidden shadow-2xl border border-border/20 transition-all duration-700"
                    >
                        <NaverMap className="w-full h-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

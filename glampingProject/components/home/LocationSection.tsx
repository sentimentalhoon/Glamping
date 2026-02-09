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
                                서울에서 불과 50분.<br />
                                북한강의 물안개가 피어오르는 청평의 깊은 숲 속에 
                                루미나 프라이빗 에스테이트가 자리하고 있습니다.
                            </p>
                            <p>
                                <strong>Address</strong><br />
                                경기도 가평군 청평면 호반로 000-00
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
                        className="w-full lg:w-2/3 h-[500px] rounded-sm overflow-hidden shadow-2xl border border-border/20 grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <NaverMap className="w-full h-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BrandPhilosophy() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section id="philosophy" ref={containerRef} className="relative py-32 md:py-48 bg-background overflow-hidden">
             {/* Background Element - Subtle Parallax */}
             <motion.div 
                style={{ y }}
                className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none"
            >
                <Image
                    src="/interior.png" // Using existing asset effectively
                    alt="Background Ambience"
                    fill
                    className="object-cover grayscale"
                />
            </motion.div>

            <div className="container-width relative z-10">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                    {/* Visual Anchor */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden rounded-sm shadow-2xl"
                    >
                         <Image
                            src="/interior.png"
                            alt="Lumina Interior Philosophy"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-[3s]"
                        />
                         <div className="absolute inset-0 bg-black/20"></div>
                    </motion.div>

                    {/* Narrative Text */}
                    <div className="w-full md:w-7/12 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-secondary text-sm tracking-[0.3em] uppercase block mb-6">Our Philosophy</span>
                            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
                                휴식을 넘어선,<br />
                                <span className="italic font-serif text-primary/80">깊이 있는 사유의 시간</span>
                            </h2>
                            <div className="w-16 h-[2px] bg-secondary/50 mb-8"></div>
                        </motion.div>

                        <div className="space-y-8">
                             <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed break-keep font-serif"
                            >
                                루미나는 단순한 숙박 시설이 아닙니다. 자연과 사람이 가장 완벽한 거리에서 마주할 수 있도록 설계된 건축의 미학입니다.
                                바람의 소리가 음악이 되고, 달빛이 조명이 되는 곳.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed break-keep font-serif"
                            >
                                도시의 소음 대신 숲의 침묵을 선물합니다.
                                오직 12분만을 위해 준비된 루미나 프라이빗 에스테이트에서
                                당신의 삶이 다시 숨 쉬는 순간을 경험하십시오.
                            </motion.p>
                        </div>

                        <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 1, delay: 0.6 }}
                             viewport={{ once: true }}
                             className="pt-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-foreground/20"></div>
                                <span className="font-serif italic text-foreground/60">Lumina Creative Director</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

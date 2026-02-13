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

    return (
        <section id="philosophy" ref={containerRef} className="relative py-32 md:py-48 bg-background overflow-hidden">
             {/* Background Element - Subtle Parallax */}
             <motion.div 
                style={{ y }}
                className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none"
            >
                <Image
                    src="/interior.png"
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
                            alt="The Western Interior Philosophy"
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
                             <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed break-keep font-serif"
                            >
                                <div className="w-16 h-0.5 bg-primary/30 my-8" />
                                <p className="text-lg text-foreground/80 leading-relaxed font-serif">
                                    &ldquo;진정한 럭셔리란 자연과 하나되는 순간에 있습니다.&rdquo;
                                </p>
                                <p className="text-foreground/70 leading-relaxed">
                                    더 웨스턴 글램핑은 변산반도의 때 묻지 않은 숲과 바다 사이에 자리 잡고 있습니다. 
                                    우리는 단순히 머무는 곳이 아닌, 자연의 감각을 온전히 깨우는 경험을 제안합니다.
                                </p>
                            </motion.div>

                            <motion.div
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 1, delay: 0.6 }}
                                 viewport={{ once: true }}
                                 className="pt-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] w-12 bg-foreground/20"></div>
                                    <span className="font-serif italic text-foreground/60">The Western Creative Director</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function HeroVideoParallax() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Parallax Video */}
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Video Fallback"
                    fill
                    className="object-cover opacity-40"
                />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src="/videos/campfire.mp4" type="video/mp4" />
                </video>
            </motion.div>
            
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <span className="section-subheading text-secondary mb-4">Combo: Video + Parallax</span>
                <h1 className="display-heading mb-6">움직이는 배경과 깊이감</h1>
                <p className="max-w-2xl text-lg text-white/90 mb-10 font-light">
                    모닥불 영상의 역동성과 패럴랙스의 입체감을 동시에 제공하여<br />
                    극강의 몰입형 시각 경험을 만들어냅니다.
                </p>
            </div>
        </section>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroParallax() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image with Parallax */}
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0"
            >
                <Image
                    src="/hero.png"
                    alt="Parallax Effect Sample"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <span className="section-subheading text-secondary mb-4">Effect: Parallax</span>
                <h1 className="display-heading mb-6">스크롤에 반응하는 공간</h1>
                <p className="max-w-2xl text-lg text-white/90 mb-10 font-light">
                    스크롤을 내릴 때 배경이 콘텐츠보다 천천히 움직여서<br />
                    실제 공간에 있는 듯한 입체감을 연출합니다.
                </p>
                <div className="animate-bounce mt-10 opacity-50">
                    <p className="text-xs uppercase tracking-widest">Scroll Down to See Effect</p>
                </div>
            </div>
        </section>
    );
}

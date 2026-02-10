"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroUltimate() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#1A2F23]">
            {/* 1. Ken Burns + Parallax combined */}
            <motion.div 
                style={{ y }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src="/videos/campfire.mp4" type="video/mp4" />
                    </video>
                </div>
            </motion.div>
            
            {/* 2. Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F23]/60 via-transparent to-[#1A2F23]/90" />
            <div className="absolute inset-0 bg-black/20" />

            {/* 3. Mist Layers */}
            <motion.div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                initial={{ x: "-5%" }}
                animate={{ x: "5%" }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            >
                <div className="absolute top-1/2 left-0 w-[150%] h-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl rotate-6" />
            </motion.div>

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span className="section-subheading text-secondary mb-4">Effect: Ultimate Combination</span>
                    <h1 className="display-heading mb-6">최고의 몰입형 경험</h1>
                    <p className="max-w-2xl text-lg text-white/90 mb-10 font-light leading-relaxed">
                        켄 번즈, 패럴랙스, 그라데이션, 그리고 안개 효과까지.<br />
                        모든 요소가 조화롭게 어우러진 더 웨스턴 글램핑만의 시그니처 연출입니다.
                    </p>
                    <button className="btn-secondary px-12 py-4 text-lg">지금 예약하기</button>
                </motion.div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                 <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                     <div className="w-1 h-2 bg-white rounded-full"></div>
                 </div>
            </div>
        </section>
    );
}

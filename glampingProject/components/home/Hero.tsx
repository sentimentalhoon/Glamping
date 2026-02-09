"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#1A2F23]">
            {/* 1. Cinematic Video Background with Parallax */}
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
                        className="w-full h-full object-cover opacity-60 scale-105"
                    >
                        <source src="/videos/campfire.mp4" type="video/mp4" />
                    </video>
                </div>
            </motion.div>
            
            {/* 2. Atmosphere Layers */}
            {/* Deep darkening for text readability and mood */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F23]/40 via-transparent to-[#1A2F23]/90" />
            <div className="absolute inset-0 bg-black/30" />

            {/* Mist Animation */}
            <motion.div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                initial={{ x: "-5%" }}
                animate={{ x: "5%" }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            >
                <div className="absolute top-1/2 left-0 w-[150%] h-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl rotate-6" />
            </motion.div>

            {/* 3. The Narrative Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <span className="section-subheading text-secondary mb-6 tracking-[0.2em] uppercase text-sm md:text-base">
                        The Private Estate
                    </span>
                    <h1 className="display-heading mb-8 break-keep drop-shadow-lg text-white">
                        자연이 허락한<br />
                        <span className="text-white/90">유일한 안식처</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed break-keep font-sans">
                        소유하는 것만으로 자부심이 되는 루미나의 멤버십.<br />
                        당신만의 숲 속 별장에서 시간이 멈추는 경험을 선사합니다.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="btn-secondary min-w-[200px] text-lg py-4 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-500">
                            프라이빗 투어 신청
                        </button>
                        <button className="px-8 py-4 text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 font-medium tracking-wide">
                            멤버십 혜택 보기
                        </button>
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                 <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Explore</span>
                 <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse"></div>
            </motion.div>
        </section>
    );
}

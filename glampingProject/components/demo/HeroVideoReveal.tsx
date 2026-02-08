"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVideoReveal() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Reveal Video */}
            <motion.div 
                className="absolute inset-0"
                initial={{ filter: "blur(20px) brightness(0.5)", scale: 1.1 }}
                animate={{ filter: "blur(0px) brightness(1)", scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
            >
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
            
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                >
                    <span className="section-subheading text-secondary mb-4">Combo: Video + Reveal</span>
                    <h1 className="display-heading mb-6">생동감이 피어나는 순간</h1>
                    <p className="max-w-2xl text-lg text-white/90 mb-10 font-light">
                        블러 효과 속에서 서서히 타오르는 모닥불 영상이 나타나며<br />
                        사용자의 호기심과 감성을 자극하는 오프닝을 연출합니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

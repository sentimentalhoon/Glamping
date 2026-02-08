"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroMist() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#1A2F23]">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Mist Effect Sample"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            
            {/* Mist Layers */}
            <motion.div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                initial={{ x: "-10%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            >
                <div className="absolute top-1/2 left-0 w-[200%] h-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl rotate-12" />
            </motion.div>
            
            <motion.div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                initial={{ x: "0%" }}
                animate={{ x: "-10%" }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            >
                <div className="absolute bottom-0 left-0 w-[200%] h-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-2xl -rotate-6" />
            </motion.div>

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <span className="section-subheading text-secondary mb-4">Effect: Morning Mist</span>
                <h1 className="display-heading mb-6">새벽녘의 몽환적인 분위기</h1>
                <p className="max-w-2xl text-lg text-white/90 mb-10 font-light">
                    움직이는 안개 효과를 추가하여 산속 글램핑장 특유의<br />
                    고요하고 신비로운 아침 분위기를 시각화합니다.
                </p>
            </div>
        </section>
    );
}

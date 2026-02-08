"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroReveal() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Reveal Transition */}
            <motion.div 
                className="absolute inset-0"
                initial={{ filter: "blur(20px) grayscale(100%)", scale: 1.1 }}
                animate={{ filter: "blur(0px) grayscale(0%)", scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
            >
                <Image
                    src="/hero.png"
                    alt="Reveal Effect Sample"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
            
            {/* Overlay */}
            <motion.div 
                className="absolute inset-0 bg-black/60"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                >
                    <span className="section-subheading text-secondary mb-4">Effect: Artistic Reveal</span>
                    <h1 className="display-heading mb-6">잠들었던 감각의 깨어남</h1>
                    <p className="max-w-2xl text-lg text-white/90 mb-10 font-light">
                        처음 접속 시 이미지가 흐릿하고 무채색인 상태에서 서서히 선명하게 드러나며,<br />
                        사용자에게 예술적이고 감성적인 첫인상을 남깁니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

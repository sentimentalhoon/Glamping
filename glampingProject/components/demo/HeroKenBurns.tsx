"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroKenBurns() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Ken Burns Effect */}
            <motion.div 
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.15 }}
                transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "linear" 
                }}
            >
                <Image
                    src="/hero.png"
                    alt="Ken Burns Effect Sample"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <span className="section-subheading text-secondary mb-4">Effect: Ken Burns</span>
                <h1 className="display-heading mb-6">천천히 다가오는 자연</h1>
                <p className="max-w-2xl text-lg text-white/90 mb-10 font-light">
                    이미지가 아주 천천히 확대되면서 공간에 깊이감을 주고,<br />
                    사용자의 시선을 자연스럽게 머물게 합니다.
                </p>
            </div>
        </section>
    );
}

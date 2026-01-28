"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Luxury Glamping Tent at Night"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-sm md:text-base font-medium tracking-[0.3em] mb-4 block text-secondary">
                        자연 속에서의 온전한 휴식
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 break-keep"
                >
                    자연이 품은 <br /> 프리미엄 쉼터
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed break-keep"
                >
                    야생의 아름다움과 호텔의 편안함이 공존하는 곳.<br className="hidden md:block" />
                    별빛 아래 나만의 공간에서 특별한 추억을 만드세요.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                        예약하기
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}

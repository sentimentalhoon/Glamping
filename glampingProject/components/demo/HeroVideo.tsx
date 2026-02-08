"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVideo() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Video (Cinemagraph) */}
            <div className="absolute inset-0">
                {/* Fallback Image while video loads or if video fails */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="section-subheading text-secondary mb-4">Effect: Cinemagraph (Video)</span>
                    <h1 className="display-heading mb-6">살아 움직이는 풍경</h1>
                    <p className="max-w-2xl text-lg text-white/90 mb-10 font-light">
                        정지된 사진이 아닌 미세하게 움직이는 영상을 배경으로 사용하여,<br />
                        가장 현대적이고 생동감 넘치는 프리미엄 경험을 선사합니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

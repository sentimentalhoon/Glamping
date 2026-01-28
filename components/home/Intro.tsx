"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Intro() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative h-[600px] w-full overflow-hidden rounded-lg shadow-2xl">
                            <Image
                                src="/interior.png"
                                alt="Luxury Glamping Interior"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary break-keep">
                            숲 속의 은신처
                        </h2>
                        <div className="w-20 h-1 bg-secondary"></div>
                        <p className="text-lg text-foreground/80 leading-relaxed font-light break-keep">
                            5성급 호텔의 편안함을 포기하지 마세요.
                            우리의 지오데식 돔은 숲의 파노라마 뷰, 푹신한 킹사이즈 침대,
                            그리고 사계절 내내 따뜻한 개별 난방 시스템을 제공합니다.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed font-light break-keep">
                            새소리와 함께 눈을 뜨고, 숨겨진 산책로를 탐험하며,
                            밤에는 별이 쏟아지는 하늘 아래 모닥불 옆에서 하루를 마무리하세요.
                        </p>
                        <button className="text-primary font-medium tracking-wide border-b-2 border-secondary hover:text-secondary transition-colors pb-1">
                            부대시설 자세히 보기
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/hero.png", alt: "Night view of the dome", label: "고요한 밤" },
    { src: "/interior.png", alt: "Interior comfort", label: "아늑한 실내" },
    { src: "/hottub.png", alt: "Private Hot Tub", label: "숲속 스파" },
    { src: "/dinner.png", alt: "Private Dining", label: "프라이빗 다이닝" },
];

export function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">자연 속의 순간들</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto break-keep">
                        당신을 기다리는 잊지 못할 추억의 장면들입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-lg cursor-pointer group ${index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                                }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                                <span className="text-lg font-serif tracking-wide">{img.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

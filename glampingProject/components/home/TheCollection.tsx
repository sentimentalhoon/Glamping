"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
    {
        id: "glass-dome",
        title: "The Glass Dome",
        subtitle: "Panoramic Nature View",
        description: "360도 투명 글라스로 마주하는 숲의 파노라마. 침대에 누워 쏟아지는 별을 감상할 수 있는 시그니처 모델.",
        image: "/hero.jpg", // Placeholder, reuse hero for now
        specs: ["12 Pyung", "King Bed", "Private Jacuzzi"]
    },
    {
        id: "forest-lodge",
        title: "The Forest Lodge",
        subtitle: "Secluded Wood Cabin",
        description: "친환경 목재로 지어진 프라이빗 캐빈. 숲의 향기와 따스한 온기가 감도는 가장 아늑한 은신처.",
        image: "/interior.jpg", // Placeholder
        specs: ["15 Pyung", "Twin Bed", "Fireplace"]
    }
];

export function TheCollection() {
    return (
        <section id="collection" className="section-padding bg-muted/30 overflow-hidden">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="section-subheading">The Collection</span>
                    <h2 className="display-heading text-foreground mb-6">Architectural Masterpieces</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-normal leading-[1.85]">
                        자연을 거스르지 않고 스며드는 건축.<br />
                        마차뷰클럽의 컬렉션은 공간 그 자체로 예술이 됩니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-8">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-end border-b border-border/40 pb-4">
                                    <div>
                                        <span className="section-subheading text-secondary/80 mb-2">{item.subtitle}</span>
                                        <h3 className="font-serif text-3xl font-semibold tracking-[-0.015em] text-foreground group-hover:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowRight className="text-primary w-8 h-8" />
                                    </div>
                                </div>
                                <p className="text-foreground/72 font-normal leading-[1.8] line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="flex gap-4 pt-2">
                                    {item.specs.map(spec => (
                                        <span key={spec} className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1 rounded-full">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
    {
        id: "glass-dome",
        title: "밸리 웨건 스위트",
        subtitle: "Panoramic Nature View",
        description: "탁 트인 계곡 전망과 함께하는 프라이빗 웨건 스테이. 노을과 별빛을 한 공간에서 누릴 수 있는 시그니처 타입입니다.",
        image: "/collection-wagon-valley.jpg",
        specs: ["12평", "킹 베드", "프라이빗 자쿠지"]
    },
    {
        id: "forest-lodge",
        title: "포레스트 웨건 로지",
        subtitle: "Secluded Wood Cabin",
        description: "숲의 깊은 정취를 담은 우드 무드 웨건 객실. 아늑한 분위기와 조용한 휴식에 집중한 프리미엄 타입입니다.",
        image: "/collection-wagon-forest.jpg",
        specs: ["15평", "트윈 베드", "파이어플레이스"]
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
                    <h2 className="display-heading text-foreground mb-6">웨건 컬렉션</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-normal leading-[1.85]">
                        자연의 결을 살린 디자인과 프라이빗한 동선을 담아
                        <br />
                        웨건 스타일 글램핑의 새로운 기준을 제안합니다.
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



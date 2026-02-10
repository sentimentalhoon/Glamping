"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function LogoShowcase() {
    const logos = [
        {
            id: 1,
            name: "Classic Wordmark",
            description: "Traditional Serif Elegance",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#1A1A1A] p-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-serif text-[#D4AF37] tracking-widest uppercase border-b border-[#D4AF37]/30 pb-2 mb-1">The Western</h3>
                        <span className="text-[0.6rem] text-white/60 tracking-[0.5em] uppercase">Private Glamping</span>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            name: "Modern Minimal",
            description: "Clean Sans-Serif",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-white p-8 border border-black/10">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center mb-3">
                            <span className="font-bold text-xl">W</span>
                        </div>
                        <h3 className="text-xl font-sans font-bold text-black tracking-tighter">THE WESTERN</h3>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            name: "Badge Emblem",
            description: "Vintage Outdoor Style",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#2C3E50] p-8">
                    <div className="relative w-32 h-32 border-2 border-white/80 rounded-full flex flex-col items-center justify-center p-4">
                        <div className="absolute inset-1 border border-white/30 rounded-full" />
                        <span className="text-[0.5rem] text-white/80 uppercase tracking-widest mb-1">Est. 2024</span>
                        <h3 className="text-center text-sm font-serif text-white font-bold leading-tight">THE<br/>WESTERN</h3>
                        <span className="text-[0.5rem] text-white/60 uppercase mt-1">Glamping</span>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            name: "Korean Identity",
            description: "Nanum Myeongjo",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#F5F5F0] p-8">
                    <div className="flex flex-col items-start gap-2 border-l-2 border-black pl-4">
                        <h3 className="text-2xl font-serif font-bold text-black leading-none">더 웨스턴<br/>글램핑</h3>
                        <span className="text-xs text-black/50 tracking-widest uppercase">The Western</span>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container-width px-4">
                <SectionHeading 
                    title="Brand Identity" 
                    subtitle="THE WESTERN GLAMPING" 
                    className="mb-16"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-square w-full mb-6 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
                                {logo.component}
                            </div>
                            <div className="text-center">
                                <h4 className="text-lg font-medium text-foreground">{logo.name}</h4>
                                <p className="text-sm text-foreground/50">{logo.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <p className="text-center mt-12 text-sm text-foreground/40">
                    * AI 생성 기능 일시적 제한으로 렌더링된 컨셉 시안입니다.
                </p>
            </div>
        </section>
    );
}

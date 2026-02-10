"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function LogoShowcase() {
    const logos = [
        // 1. Classic Luxury
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
        // 2. Modern Minimal
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
        // 3. Vintage Emblem
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
        // 4. Korean Identity
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
        },
        // 5. Monogram Luxury
        {
            id: 5,
            name: "Royal Monogram",
            description: "Interlocking Initials",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#0F0F0F] p-8">
                    <div className="relative">
                        <span className="text-6xl font-serif text-[#D4AF37] opacity-80 absolute -left-4 top-0">T</span>
                        <span className="text-6xl font-serif text-white relative z-10">W</span>
                        <span className="text-6xl font-serif text-[#D4AF37] opacity-80 absolute -right-3 top-4">G</span>
                    </div>
                </div>
            )
        },
        // 6. Nature Outline
        {
            id: 6,
            name: "Nature Line",
            description: "Minimal Line Art",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-white p-8">
                    <div className="text-center text-[#2A4B3C]">
                        <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M13.5 3L21 21H3L10.5 3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.5 14L13.5 19" strokeLinecap="round"/>
                        </svg>
                        <h3 className="text-sm font-light tracking-[0.2em] font-serif">WESTERN</h3>
                    </div>
                </div>
            )
        },
         // 7. Signature Script
         {
            id: 7,
            name: "Signature",
            description: "Handwritten Style",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#FFFBF0] p-8">
                    <div className="text-center -rotate-6">
                        <h3 className="text-4xl font-serif italic text-black/80" style={{ fontFamily: "cursive" }}>The Western</h3>
                        <p className="text-xs text-black/40 mt-2 font-sans tracking-widest">GLAMPING RESORT</p>
                    </div>
                </div>
            )
        },
        // 8. Geometric Abstract
        {
            id: 8,
            name: "Geo Abstract",
            description: "Modern Shapes",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-black p-8">
                    <div className="grid grid-cols-2 gap-1 w-16 h-16">
                        <div className="bg-white rounded-tr-xl"></div>
                        <div className="bg-[#D4AF37] rounded-tl-xl"></div>
                        <div className="bg-[#D4AF37] rounded-br-xl"></div>
                        <div className="bg-white rounded-bl-xl"></div>
                    </div>
                </div>
            )
        },
        // 9. Circle Badge
        {
            id: 9,
            name: "Circle Badge",
            description: "Rounded Stamp",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#E8E8E8] p-8">
                    <div className="w-28 h-28 border-[1px] border-black rounded-full flex items-center justify-center relative">
                         <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                            <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                            <text className="text-[0.6rem] tracking-[0.2em] uppercase fill-black">
                                <textPath href="#curve">The Western Glamping • Est 2024 •</textPath>
                            </text>
                        </svg>
                        <span className="font-serif font-bold text-2xl">W</span>
                    </div>
                </div>
            )
        },
        // 10. Pine Tree
        {
            id: 10,
            name: "Forest Icon",
            description: "Nature Focus",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#1e2f23] p-8">
                    <div className="text-center">
                        <div className="flex justify-center -space-x-3 mb-2">
                             <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#4a7c59]"></div>
                             <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-[#7eb08d] -mt-2 transform translate-y-1"></div>
                        </div>
                        <h3 className="text-white text-lg font-serif">WESTERN</h3>
                    </div>
                </div>
            )
        },
        // 11. Boxed Frame
        {
            id: 11,
            name: "Boxed Frame",
            description: "Structured Layout",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-white p-8">
                    <div className="border-4 border-black p-4 px-6 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                            <span className="text-xs font-bold">PREMIUM</span>
                        </div>
                        <h3 className="text-xl font-black tracking-tighter">WESTERN</h3>
                    </div>
                </div>
            )
        },
        // 12. Sunset Gradient
        {
            id: 12,
            name: "Sunset",
            description: "Gradient Vibes",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-white p-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-t from-orange-500 via-red-500 to-purple-900 flex items-center justify-center shadow-lg">
                        <span className="text-white font-serif italic text-2xl">W</span>
                    </div>
                </div>
            )
        },
        // 13. Minimal Dot
        {
            id: 13,
            name: "Minimal Dot",
            description: "Ultra Simple",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#f3f4f6] p-8">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-gray-800">W</span>
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    </div>
                </div>
            )
        },
        // 14. Campfire
        {
            id: 14,
            name: "Campfire",
            description: "Warmth Icon",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#1a1a1a] p-8">
                    <div className="flex flex-col items-center">
                        <div className=" text-orange-500 mb-2">
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C10 5 8 7 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 7 14 5 12 2MZ" />
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 11 21.9 10 21.7 9C21.7 9 20 11 18 11C16.5 11 15 10 14 9C14 12 12 14 9 14C7 14 6 13 6 12C6 15 8 18 12 18V22Z" fillOpacity="0.5"/>
                             </svg>
                        </div>
                        <h3 className="text-white text-sm tracking-widest font-light">WESTERN</h3>
                    </div>
                </div>
            )
        },
        // 15. Brutalism
        {
            id: 15,
            name: "Brutalism",
            description: "Bold & High Contrast",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#FF3333] p-8">
                    <h3 className="text-4xl font-black text-white leading-none tracking-tighter transform -rotate-2">
                        WEST<br/>ERN
                    </h3>
                </div>
            )
        },
        // 16. Vertical Stack
        {
            id: 16,
            name: "Vertical Stack",
            description: "Modern Text Layout",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-white p-8">
                    <div className="flex flex-col text-sm font-bold tracking-[0.5em] text-center gap-2 border-y-2 border-black py-4">
                        <span>THE</span>
                        <span>WESTERN</span>
                        <span>GLAMPING</span>
                    </div>
                </div>
            )
        },
        // 17. Hexagon
        {
            id: 17,
            name: "Hexagon",
            description: "Geometric Frame",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#2a2a2a] p-8">
                     <div className="w-24 h-24 bg-[#D4AF37] flex items-center justify-center [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]">
                        <span className="text-black font-serif font-bold text-3xl">W</span>
                     </div>
                </div>
            )
        },
        // 18. Underline Accent
        {
            id: 18,
            name: "Underline Accent",
            description: "Subtle Detail",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-slate-100 p-8">
                    <div className="relative">
                        <h3 className="text-2xl font-serif text-slate-800 z-10 relative">The Western</h3>
                        <div className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 -rotate-1"></div>
                    </div>
                </div>
            )
        },
        // 19. Wave
        {
            id: 19,
            name: "Ocean Wave",
            description: "Coastal Theme",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-blue-50 p-8">
                    <div className="text-center">
                        <h3 className="text-blue-900 font-serif font-bold text-lg mb-1">WESTERN</h3>
                        <svg className="w-12 h-4 text-blue-500 mx-auto" viewBox="0 0 100 20" fill="none" stroke="currentColor">
                            <path d="M0 10 Q 25 20 50 10 T 100 10" strokeWidth="3" />
                        </svg>
                    </div>
                </div>
            )
        },
        // 20. Glitch
        {
            id: 20,
            name: "Digital Glitch",
            description: "Tech Modern",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-black p-8">
                    <h3 className="text-3xl font-bold text-white relative">
                        <span className="absolute -left-[2px] -top-[2px] text-red-500 opacity-70">W</span>
                        <span className="absolute -right-[2px] -bottom-[2px] text-blue-500 opacity-70">W</span>
                        W
                    </h3>
                </div>
            )
        },
        // 21. Shield
        {
            id: 21,
            name: "Royal Shield",
            description: "Heraldic Style",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#3d3d3d] p-8">
                    <div className="relative w-20 h-24 bg-gray-200 rounded-b-full flex items-center justify-center border-4 border-yellow-600">
                         <span className="text-3xl font-black text-gray-800">W</span>
                    </div>
                </div>
            )
        },
        // 22. Handwriting 2
        {
            id: 22,
            name: "Signature 2",
            description: "Rough Marker",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-white p-8">
                    <div className="border border-dashed border-gray-400 p-4 rotate-1">
                        <h3 className="text-2xl font-bold text-gray-800 -rotate-2" style={{ fontFamily: "sans-serif" }}>THE WESTERN</h3>
                    </div>
                </div>
            )
        },
        // 23. Star
        {
            id: 23,
            name: "North Star",
            description: "Guidance Theme",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#0a0a2a] p-8">
                    <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 text-yellow-200 mb-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                        </svg>
                        <h3 className="text-white text-xs tracking-[0.3em] font-light">WESTERN</h3>
                    </div>
                </div>
            )
        },
        // 24. Typographic Play
        {
            id: 24,
            name: "Typographic",
            description: "Letter Form",
            component: (
                <div className="flex items-center justify-center w-full h-full bg-[#f0f0f0] p-8">
                    <div className="text-6xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">
                        W.
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container-width px-4">
                <SectionHeading 
                    title="Brand Identity Collection" 
                    subtitle="24 DESIGN CONCEPTS" 
                    className="mb-16"
                />
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-square w-full mb-4 overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg">
                                {logo.component}
                            </div>
                            <div className="text-center">
                                <h4 className="text-sm font-medium text-foreground">{logo.name}</h4>
                                <p className="text-xs text-foreground/50">{logo.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <p className="text-center mt-12 text-sm text-foreground/40">
                    * 다양한 브랜드 아이덴티티 시안 모음
                </p>
            </div>
        </section>
    );
}

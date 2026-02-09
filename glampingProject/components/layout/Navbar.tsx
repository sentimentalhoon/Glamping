"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
    () => import("@/components/ui/ThemeToggle").then((mod) => mod.ThemeToggle),
    { ssr: false }
);

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {
            name: "The Estate",
            items: [
                { name: "브랜드 철학", href: "/philosophy" },
                { name: "로케이션", href: "/location" },
                { name: "건축 미학", href: "/architecture" },
            ]
        },
        {
            name: "Collection",
            items: [
                { name: "더 글라스 돔", href: "/collection/glass-dome" },
                { name: "더 포레스트 롯지", href: "/collection/forest-lodge" },
                { name: "시그니처 어메니티", href: "/collection/amenities" },
            ]
        },
        {
            name: "Ownership",
            items: [
                { name: "멤버십 혜택", href: "/membership" },
                { name: "투자 가치", href: "/investment" },
                { name: "입회 상담", href: "/inquiry" },
            ]
        },
        {
            name: "Culture",
            items: [
                { name: "매거진", href: "/magazine" },
                { name: "오너스 라운지", href: "/owners-lounge" },
            ]
        },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                    ? "bg-background/90 backdrop-blur-xl shadow-sm py-4 border-b border-border/10"
                    : "bg-gradient-to-b from-black/80 to-transparent py-8"
                }`}
        >
            <div className="container-width flex items-center justify-between">
                <Link
                    href="/"
                    className={`text-2xl font-serif font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
                        }`}
                >
                    Lumina
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    <div className="flex items-center space-x-10 mr-6">
                        {navLinks.map((group, index) => (
                            <div
                                key={group.name}
                                className="relative group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <button
                                    className={`flex items-center gap-1 transition-all duration-300 text-xs font-medium tracking-[0.15em] uppercase ${isScrolled
                                            ? "text-foreground/70 hover:text-primary"
                                            : "text-white/80 hover:text-white"
                                        }`}
                                >
                                    {group.name}
                                </button>

                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-56"
                                        >
                                            <div className="bg-surface/95 backdrop-blur-md rounded-sm shadow-2xl border border-border/20 overflow-hidden py-3">
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-6 py-3 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors font-serif"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 border-l border-white/20 pl-8 ml-2">
                        <ThemeToggle />
                        <Button 
                            href="/inquiry"
                            variant={isScrolled ? "primary" : "outline"}
                            className={`${!isScrolled ? "border-white/40 text-white hover:bg-white hover:text-primary" : ""} px-6 text-xs uppercase tracking-widest`}
                        >
                            Private Tour
                        </Button>
                    </div>
                </div>

                {/* Mobile Icons */}
                <div className="flex items-center space-x-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className={`${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-t border-border overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((group, index) => (
                                <div key={group.name} className="border-b border-border/30 last:border-0 pb-4 last:pb-0">
                                    <button
                                        onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground/60 uppercase tracking-widest"
                                    >
                                        {group.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileExpandedIndex === index ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileExpandedIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col space-y-2 pb-4 pl-4">
                                                    {group.items.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="py-2 text-foreground/60 hover:text-primary transition-colors text-base"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                            <div className="pt-6">
                                <Button href="/inquiry" className="w-full text-sm uppercase tracking-widest py-4">
                                    Private Tour 신청
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

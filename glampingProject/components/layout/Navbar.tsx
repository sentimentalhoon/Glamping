"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

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
            name: "소개",
            items: [
                { name: "글램핑 소개", href: "/about" },
                { name: "오시는 길", href: "/location" },
            ]
        },
        {
            name: "객실",
            items: [
                { name: "객실 안내", href: "/accommodations" },
                { name: "요금 안내", href: "/pricing" },
            ]
        },
        {
            name: "시설&관광",
            items: [
                { name: "부대시설", href: "/amenities" },
                { name: "갤러리", href: "/gallery" },
                { name: "주변 관광", href: "/nearby" },
            ]
        },
        {
            name: "커뮤니티",
            items: [
                { name: "FAQ", href: "/faq" },
                { name: "후기", href: "/reviews" },
            ]
        },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container-width flex items-center justify-between">
                <Link
                    href="/"
                    className={`text-2xl font-serif font-bold tracking-wider transition-colors ${isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
                        }`}
                >
                    루미나
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((group, index) => (
                        <div
                            key={group.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <button
                                className={`flex items-center gap-1 transition-colors text-sm font-medium tracking-wide ${isScrolled
                                        ? "text-foreground/80 hover:text-primary"
                                        : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {group.name}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hoveredIndex === index ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                                    >
                                        <div className="bg-surface rounded-xl shadow-xl border border-border/50 overflow-hidden py-2">
                                            {group.items.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
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
                    <Button 
                         href="/"
                         variant={isScrolled ? "primary" : "secondary"}
                         className={!isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}
                    >
                        예약하기
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
                        <div className="flex flex-col p-6 space-y-2">
                            {navLinks.map((group, index) => (
                                <div key={group.name} className="border-b border-border/50 last:border-0 pb-2 last:pb-0">
                                    <button
                                        onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full py-3 text-lg font-medium text-foreground/80"
                                    >
                                        {group.name}
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpandedIndex === index ? "rotate-180" : ""}`} />
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
                            <div className="pt-4">
                                <Button href="/" className="w-full">
                                    예약하기
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "홈", href: "/" },
        { name: "객실 안내", href: "/accommodations" },
        { name: "부대시설", href: "/amenities" },
        { name: "갤러리", href: "/gallery" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className={`text-2xl font-serif font-bold tracking-wider transition-colors ${isScrolled ? "text-primary" : "text-white"
                        }`}
                >
                    루미나
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors text-sm font-medium tracking-wide ${isScrolled
                                    ? "text-foreground/80 hover:text-primary"
                                    : "text-white/80 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-colors ${isScrolled
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-white text-primary hover:bg-white/90"
                        }`}>
                        예약하기
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
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
                        className="md:hidden bg-background border-t border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary text-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="bg-primary text-primary-foreground w-full py-3 rounded-md text-sm font-medium tracking-wide mt-4">
                                예약하기
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

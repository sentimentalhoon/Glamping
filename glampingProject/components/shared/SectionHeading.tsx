"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
    light?: boolean;
}

export function SectionHeading({ 
    title, 
    subtitle, 
    className, 
    align = "center",
    light = false
}: SectionHeadingProps) {
    return (
        <div className={cn(
            "flex flex-col gap-2", 
            align === "center" && "items-center text-center",
            align === "right" && "items-end text-right",
            className
        )}>
            {subtitle && (
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                        "text-sm font-medium tracking-[0.2em] uppercase",
                        light ? "text-white/60" : "text-primary"
                    )}
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={cn(
                    "text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight",
                    light ? "text-white" : "text-foreground"
                )}
            >
                {title}
            </motion.h2>
        </div>
    );
}

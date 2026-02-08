"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    items: FaqItem[];
    className?: string;
}

export function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-border/50"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-colors"
                    >
                        <span className="font-medium text-foreground pr-4">
                            {item.question}
                        </span>
                        <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

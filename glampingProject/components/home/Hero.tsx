"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLowPowerMode, setIsLowPowerMode] = useState(false);
    
    // Check for low power/performance environment
    useEffect(() => {
        const checkEnvironment = async () => {
            // 1. Hardware Concurrency (CPU Cores)
            const isLowConcurrency = window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency <= 4;
            
            // 2. Data Saver / Network Info
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
            const isDataSaver = connection?.saveData;

            // 3. User Preference (Reduced Motion)
            const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;

            // 4. Battery Status (Experimental)
            let isLowBattery = false;
            try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if ((navigator as any).getBattery) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const battery = await (navigator as any).getBattery();
                    if (battery.level < 0.2 && !battery.charging) isLowBattery = true;
                }
            } catch (e) {
                // Ignore battery API errors or lack of support
                console.debug("Battery API not supported", e);
            }

            if (isLowConcurrency || isDataSaver || isReducedMotion || isLowBattery || isMobileViewport) {
                console.log("Low Power/Performance Mode Detected. Switching to static image.");
                setIsLowPowerMode(true);
            }
        };

        checkEnvironment();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Scroll Parallax
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse Parallax (3D Tilt)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for fluid movement
    const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig); // Up/Down tilt
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig); // Left/Right tilt
    
    // Background moves slightly opposite/different to create depth
    const bgRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig); 
    const bgRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        
        // Calculate normalized position (-0.5 to 0.5) from center
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section 
            ref={containerRef} 
            className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#1A2F23] perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1200px" }} // CSS variable for perspective
        >
            {/* 1. Cinematic Video Background with Parallax & 3D Tilt */}
            <motion.div 
                style={{ 
                    y,
                    rotateX: bgRotateX,
                    rotateY: bgRotateY,
                    scale: 1.1 // Checked to ensure no edges visible during tilt
                }}
                className="absolute inset-0 pointer-events-none transform-gpu"
            >
                <div className="absolute inset-0 w-full h-full">
                    {isLowPowerMode ? (
                        <Image
                            src="/hero.jpg"
                            alt="Wagon-style glamping cabin at dusk"
                            fill
                            sizes="100vw"
                            className="object-cover opacity-60"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5Jggg=="
                        />
                    ) : (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                            poster="/hero.jpg"
                            className="w-full h-full object-cover opacity-60"
                        >
                            <source src="/videos/campfire.mp4" type="video/mp4" />
                        </video>
                    )}
                </div>
            </motion.div>
            
            {/* 2. Atmosphere Layers (Static or minimal movement) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F23]/40 via-transparent to-[#1A2F23]/90 pointer-events-none" />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />

            {/* Mist Animation */}
            <motion.div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                initial={{ x: "-5%" }}
                animate={{ x: "5%" }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            >
                <div className="absolute top-1/2 left-0 w-[150%] h-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl rotate-6" />
            </motion.div>

            {/* 3. The Narrative Content with Stronger 3D Tilt */}
            <div className="relative h-full container-width flex flex-col justify-center items-center text-center text-white z-10 px-4 preserve-3d">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ 
                        rotateX, 
                        rotateY,
                        z: 50 // Push text forward
                    }}
                    className="transform-gpu"
                >
                    <span className="section-subheading mb-6 md:mb-7 text-secondary/95">
                        The Private Estate
                    </span>
                    <h1 className="display-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.024em] mb-8 md:mb-10 break-keep text-balance drop-shadow-lg text-white max-w-[22ch] md:max-w-4xl">
                        자연 속에서 누리는
                        <br />
                        <span className="text-white/90">프라이빗 웨건 글램핑</span>
                    </h1>
                    <p className="max-w-[34ch] md:max-w-3xl mx-auto text-[15px] md:text-lg text-white/85 mb-12 md:mb-14 font-normal leading-[1.88] break-keep text-balance font-sans">
                        따뜻한 조명, 고요한 풍경, 세심한 공간 설계가 어우러진
                        마차뷰 클럽 글램핑의 시그니처 스테이를 경험해보세요.
                        <br />
                        오직 당신만의 리듬으로 머무는 특별한 하루를 제안합니다.
                    </p>
                    
                    <div className="flex justify-center items-center transform-gpu translate-z-20">
                        <Button
                            href="/#inquiry"
                            variant="secondary"
                            size="lg"
                            className="min-w-[220px] md:min-w-[240px] text-base md:text-lg tracking-[0.06em] py-3.5 md:py-4 px-8 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                        >
                            멤버십 상담 요청
                        </Button>
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                 <span className="text-[10px] uppercase tracking-[0.24em] text-white/55">Explore</span>
                 <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse"></div>
            </motion.div>
        </section>
    );
}



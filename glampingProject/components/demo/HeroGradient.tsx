"use client";

import Image from "next/image";

export function HeroGradient() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png"
                    alt="Gradient Effect Sample"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F23]/80 via-transparent to-[#1A2F23]/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2F23]/40 via-transparent to-transparent" />

            {/* Content */}
            <div className="relative h-full container-width flex flex-col justify-center items-start text-left text-white z-10">
                <div className="max-w-2xl">
                    <span className="section-subheading text-secondary mb-4">Effect: Premium Gradient</span>
                    <h1 className="display-heading mb-6 text-left">브랜드의 색을 입히다</h1>
                    <p className="text-lg text-white/90 mb-10 font-light leading-relaxed">
                        단순한 검은색 레이어가 아닌, 글램핑장의 상징인 딥 포레스트 그린 색상의<br />
                        그라데이션을 활용해 신비롭고 고급스러운 분위기를 연출합니다.
                    </p>
                    <button className="btn-secondary">자세히 보기</button>
                </div>
            </div>
        </section>
    );
}

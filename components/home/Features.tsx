"use client";

import { motion } from "framer-motion";
import { Wifi, Flame, Coffee, Wind, BedDouble, Bath } from "lucide-react";

const amenities = [
    { icon: Wifi, title: "초고속 와이파이", description: "스타링크 인터넷으로 언제나 연결되어 있습니다." },
    { icon: Flame, title: "전용 화로", description: "불멍과 바베큐를 위한 프라이빗 공간." },
    { icon: BedDouble, title: "킹사이즈 침대", description: "최고급 침구류가 제공되는 편안한 잠자리." },
    { icon: Bath, title: "전용 욕실", description: "온수 샤워와 유기농 어메니티 완비." },
    { icon: Coffee, title: "간이 주방", description: "프렌치 프레스 커피와 조리 도구 제공." },
    { icon: Wind, title: "냉난방 시설", description: "사계절 쾌적한 온도를 유지합니다." },
];

export function Features() {
    return (
        <section id="amenities" className="py-24 bg-accent/30">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-serif font-bold text-primary mb-4">특별한 어메니티</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto break-keep">
                        고객님의 편안하고 잊지 못할 휴식을 위해 모든 디테일을 세심하게 준비했습니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <item.icon className="w-10 h-10 text-secondary mb-6 mx-auto group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-medium text-primary mb-3">{item.title}</h3>
                            <p className="text-muted-foreground font-light break-keep">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

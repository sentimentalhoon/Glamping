"use client";

import { motion } from "framer-motion";
import { Wifi, Flame, Coffee, Wind, BedDouble, Bath } from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "초고속 와이파이",
    description: "스트리밍과 원격 업무 모두 안정적으로 사용할 수 있습니다.",
  },
  {
    icon: Flame,
    title: "프라이빗 화로",
    description: "불멍과 바비큐를 위한 전용 아웃도어 공간을 제공합니다.",
  },
  {
    icon: BedDouble,
    title: "킹사이즈 침대",
    description: "최고급 침구로 깊고 편안한 휴식을 완성합니다.",
  },
  {
    icon: Bath,
    title: "어메니티 욕실",
    description: "고급 어메니티와 샤워 시설을 갖춘 프라이빗 욕실입니다.",
  },
  {
    icon: Coffee,
    title: "미니 바 & 커피",
    description: "캡슐 커피와 간단한 조리 도구를 제공합니다.",
  },
  {
    icon: Wind,
    title: "사계절 냉난방",
    description: "어떤 계절에도 쾌적한 실내 온도를 유지합니다.",
  },
];

export function Features() {
  return (
    <section id="amenities" className="section-padding bg-accent/30">
      <div className="container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading mb-4">특별한 어메니티</h2>
          <p className="text-foreground/72 max-w-2xl mx-auto break-keep text-base md:text-lg font-normal leading-[1.85]">
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
              className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <item.icon className="w-10 h-10 text-primary mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl font-semibold tracking-[-0.01em] text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-normal break-keep leading-[1.8]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

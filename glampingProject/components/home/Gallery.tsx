"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/hero.jpg", alt: "Wagon-style glamping cabin at sunset", label: "Valley Wagon View" },
  { src: "/interior.jpg", alt: "Warm wagon-style glamping interior", label: "Wagon Interior" },
  { src: "/hottub.jpg", alt: "Private forest hot tub near wagon cabin", label: "Forest Spa" },
  { src: "/dinner.jpg", alt: "Private outdoor dinner by wagon cabin", label: "Firelight Dining" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Wagon Glamping Moments</h2>
          <p className="text-foreground/72 max-w-2xl mx-auto break-keep text-base md:text-lg font-normal leading-[1.85]">
            A cinematic preview of our wagon-style private glamping experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="font-serif text-lg font-semibold tracking-[-0.01em]">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

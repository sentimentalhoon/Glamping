import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/home/Gallery";
import Image from "next/image";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/hero.jpg"
                    alt="Gallery"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium block mb-4">Moments</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold">갤러리</h1>
                </div>
            </section>

            <Gallery />

            {/* Additional Grid (reusing image for demo) */}
            <section className="pb-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-auto">
                        {/* Just mocking more images by reusing existing ones with different crops */}
                        <div className="relative h-64 rounded-lg overflow-hidden"><Image src="/hottub.jpg" alt="Gallery 1" fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover hover:scale-110 transition-transform duration-700" /></div>
                        <div className="relative h-64 rounded-lg overflow-hidden"><Image src="/dinner.jpg" alt="Gallery 2" fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover hover:scale-110 transition-transform duration-700" /></div>
                        <div className="relative h-64 rounded-lg overflow-hidden"><Image src="/interior.jpg" alt="Gallery 3" fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover hover:scale-110 transition-transform duration-700" /></div>
                        <div className="relative h-64 rounded-lg overflow-hidden"><Image src="/hero.jpg" alt="Gallery 4" fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover hover:scale-110 transition-transform duration-700" /></div>
                        <div className="relative h-64 rounded-lg overflow-hidden"><Image src="/hottub.jpg" alt="Gallery 5" fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover hover:scale-110 transition-transform duration-700" /></div>
                        <div className="relative h-64 rounded-lg overflow-hidden"><Image src="/dinner.jpg" alt="Gallery 6" fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover hover:scale-110 transition-transform duration-700" /></div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Features } from "@/components/home/Features";
import Image from "next/image";

export default function AmenitiesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/hottub.jpg"
                    alt="Amenities"
                    fill
                    sizes="100vw"
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium block mb-4">Services & Facilities</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold">부대시설</h1>
                </div>
            </section>

            <Features />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif font-bold text-primary">프라이빗 다이닝</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed break-keep">
                                각 객실마다 마련된 전용 데크에서 즐기는 바베큐 파티.
                                엄선된 지역 식재료로 구성된 바베큐 세트를 주문하시면
                                준비의 번거로움 없이 완벽한 저녁 식사를 즐기실 수 있습니다.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-secondary rounded-full" />
                                    <span>프리미엄 한우/한돈 세트 (예약 필수)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-secondary rounded-full" />
                                    <span>장작 및 숯불 제공</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                            <Image src="/dinner.jpg" alt="Private Dining" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

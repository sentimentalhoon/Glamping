import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWidget } from "@/components/home/BookingWidget";
import Image from "next/image";

export default function AccommodationsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/hero.png"
                    alt="Accommodations"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium block mb-4">Accommodations</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold">객실 안내</h1>
                </div>
            </section>

            {/* Room Types */}
            <section className="py-24 px-6 container mx-auto space-y-24">
                {/* Room 1 */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <Image src="/interior.png" alt="Forest Dome" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">포레스트 돔 (Forest Dome)</h2>
                        <p className="text-muted-foreground leading-relaxed break-keep">
                            울창한 숲 속에 자리 잡은 포레스트 돔은 완벽한 프라이버시를 자랑합니다.
                            넓은 창을 통해 사계절 변하는 숲의 풍경을 감상하실 수 있습니다.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>• 킹사이즈 침대 1개</li>
                            <li>• 전용 테라스 및 자쿠지</li>
                            <li>• 최대 2인</li>
                        </ul>
                        <div className="text-2xl font-bold text-primary">₩ 350,000 / 박</div>
                    </div>
                </div>

                {/* Room 2 */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <Image src="/hero.png" alt="Starlight Dome" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">스타라이트 돔 (Starlight Dome)</h2>
                        <p className="text-muted-foreground leading-relaxed break-keep">
                            밤하늘의 별을 가장 가까이서 만날 수 있는 객실입니다.
                            천장의 투명한 돔 구조를 통해 침대에 누워 쏟아지는 별을 감상하세요.
                        </p>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>• 퀸사이즈 침대 2개</li>
                            <li>• 천체 망원경 제공</li>
                            <li>• 최대 4인</li>
                        </ul>
                        <div className="text-2xl font-bold text-primary">₩ 420,000 / 박</div>
                    </div>
                </div>
            </section>

            <BookingWidget />
            <Footer />
        </main>
    );
}

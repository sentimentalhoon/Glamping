
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWidget } from "@/components/home/BookingWidget";
import Image from "next/image";
import { Check, Info } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// TODO: 이 데이터들을 DB 또는 CMS에서 가져오도록 변경
const PRICING_DATA = {
    rooms: [
        {
            id: "forest-dome",
            name: "포레스트 돔",
            description: "울창한 숲 속의 프라이빗 돔 텐트",
            capacity: "최대 2인",
            image: "/interior.png",
            prices: {
                offSeason: { weekday: 250000, weekend: 300000 },
                peakSeason: { weekday: 350000, weekend: 400000 },
            },
            amenities: ["킹사이즈 침대", "전용 테라스", "자쿠지", "에어컨/난방"],
        },
        {
            id: "starlight-dome",
            name: "스타라이트 돔",
            description: "밤하늘을 감상할 수 있는 투명 돔 텐트",
            capacity: "최대 4인",
            image: "/hero.png",
            prices: {
                offSeason: { weekday: 320000, weekend: 380000 },
                peakSeason: { weekday: 420000, weekend: 480000 },
            },
            amenities: ["퀸사이즈 침대 2개", "천체 망원경", "프라이빗 데크", "에어컨/난방"],
        },
        {
            id: "family-cabin",
            name: "패밀리 캐빈",
            description: "가족을 위한 넓은 캐빈 스타일 숙소",
            capacity: "최대 6인",
            image: "/dinner.png",
            prices: {
                offSeason: { weekday: 400000, weekend: 480000 },
                peakSeason: { weekday: 550000, weekend: 650000 },
            },
            amenities: ["트윈 침대 3개", "거실 공간", "간이 주방", "바베큐 그릴"],
        },
    ],
    additionals: [
        { name: "바베큐 세트 (2인)", price: 80000 },
        { name: "바베큐 세트 (4인)", price: 150000 },
        { name: "조식 세트 (1인)", price: 25000 },
        { name: "와인 패키지", price: 60000 },
        { name: "꽃 장식 데코레이션", price: 50000 },
        { name: "침구 추가 (1세트)", price: 30000 },
    ],
    refundPolicy: [
        { day: "이용 10일 전", rate: 100 },
        { day: "이용 7일 전", rate: 90 },
        { day: "이용 5일 전", rate: 70 },
        { day: "이용 3일 전", rate: 50 },
        { day: "이용 1일 전 및 당일", rate: 0 },
    ],
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/interior.png"
                    alt="Pricing"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="section-subheading text-secondary mb-4 block">
                        Pricing
                    </span>
                    <h1 className="display-heading text-4xl md:text-6xl text-white">
                        요금 안내
                    </h1>
                </div>
            </section>

            {/* Content */}
            <Section>
                <SectionHeader
                    title="객실 요금표"
                    subtitle="Rates"
                    description="계절과 요일에 따라 합리적인 요금을 제공합니다."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {PRICING_DATA.rooms.map((room) => (
                        <div key={room.id} className="card p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="card-heading text-2xl">{room.name}</h3>
                                    <p className="text-sm text-muted-foreground">{room.description}</p>
                                    <p className="text-sm font-medium mt-1 text-primary">{room.capacity}</p>
                                </div>

                                {/* Price Table */}
                                <div className="w-full max-w-sm mt-4 lg:mt-0">
                                    <table className="w-full text-sm">
                                        <thead className="bg-primary/5">
                                            <tr>
                                                <th className="py-2 px-3 text-left font-medium text-foreground">구분</th>
                                                <th className="py-2 px-3 text-center font-medium text-foreground">주중(일-목)</th>
                                                <th className="py-2 px-3 text-center font-medium text-foreground">주말(금-토)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t border-border/50 hover:bg-muted/10 transition-colors">
                                                <td className="py-2 px-3 text-muted-foreground">비수기</td>
                                                <td className="py-2 px-3 text-center text-foreground">
                                                    {room.prices.offSeason.weekday.toLocaleString()}원
                                                </td>
                                                <td className="py-2 px-3 text-center text-foreground">
                                                    {room.prices.offSeason.weekend.toLocaleString()}원
                                                </td>
                                            </tr>
                                            <tr className="border-t bg-primary/5">
                                                <td className="py-2 px-3 text-foreground font-medium">성수기</td>
                                                <td className="py-2 px-3 text-center font-bold text-primary">
                                                    {room.prices.peakSeason.weekday.toLocaleString()}원
                                                </td>
                                                <td className="py-2 px-3 text-center font-bold text-primary">
                                                    {room.prices.peakSeason.weekend.toLocaleString()}원
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <p className="text-sm font-medium text-primary mb-3">포함 내역</p>
                                <ul className="space-y-2">
                                    {room.amenities.map((amenity, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <Check className="w-4 h-4 text-primary" />
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Additional Info */}
            <Section background="muted">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     {/* Additional Options */}
                    <div>
                         <h3 className="section-heading text-2xl mb-6">추가 옵션</h3>
                         <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/50">
                             <table className="w-full">
                                <tbody className="divide-y divide-border">
                                    {PRICING_DATA.additionals.map((item, index) => (
                                        <tr key={index} className="hover:bg-muted/5 transition-colors">
                                            <td className="p-4 text-foreground/80">{item.name}</td>
                                            <td className="p-4 text-right font-medium text-primary">
                                                {item.price.toLocaleString()}원
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                             </table>
                         </div>
                    </div>

                    {/* Policy */}
                    <div>
                        <h3 className="section-heading text-2xl mb-6">환불 규정</h3>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
                             <ul className="space-y-3">
                                {PRICING_DATA.refundPolicy.map((policy, index) => (
                                    <li key={index} className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">{policy.day}</span>
                                        <span className={`font-medium ${
                                            policy.rate === 100 ? "text-primary" : "text-foreground"
                                        }`}>
                                            {policy.rate}% 환불
                                        </span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                    </div>
                </div>
            </Section>
            
            <BookingWidget />
            <Footer />
        </main>
    );
}

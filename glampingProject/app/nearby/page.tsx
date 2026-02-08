import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// TODO: 이 데이터들을 DB 또는 CMS에서 가져오도록 변경
const NEARBY_DATA = {
    categories: [
        {
            id: "attractions",
            name: "관광 명소",
            icon: "🏞️",
            places: [
                {
                    name: "청평호",
                    description: "사계절 아름다운 풍경을 자랑하는 호수. 유람선 투어와 수상 레저를 즐길 수 있습니다.",
                    distance: "차량 10분",
                    image: "/hero.png",
                    link: "https://map.naver.com/...",
                },
                {
                    name: "자라섬",
                    description: "매년 재즈 페스티벌이 열리는 섬. 캠핑장과 산책로가 잘 조성되어 있습니다.",
                    distance: "차량 15분",
                    image: "/hottub.png",
                    link: "https://map.naver.com/...",
                },
                {
                    name: "쁘띠프랑스",
                    description: "프랑스 마을을 테마로 한 문화 공간. 포토존과 공연이 인기입니다.",
                    distance: "차량 20분",
                    image: "/interior.png",
                    link: "https://map.naver.com/...",
                },
            ],
        },
        {
            id: "restaurants",
            name: "맛집",
            icon: "🍽️",
            places: [
                {
                    name: "청평숯불가든",
                    description: "30년 전통의 한우 전문점. 신선한 고기와 반찬이 일품입니다.",
                    distance: "차량 5분",
                    image: "/dinner.png",
                    link: "https://map.naver.com/...",
                },
                {
                    name: "호반막국수",
                    description: "시원한 동치미 막국수가 유명한 곳. 여름철 필수 방문 코스입니다.",
                    distance: "차량 8분",
                    image: "/hero.png",
                    link: "https://map.naver.com/...",
                },
                {
                    name: "자연밥상",
                    description: "건강한 채식 한정식을 맛볼 수 있는 곳. 예약 필수입니다.",
                    distance: "차량 12분",
                    image: "/interior.png",
                    link: "https://map.naver.com/...",
                },
            ],
        },
        {
            id: "activities",
            name: "액티비티",
            icon: "🎿",
            places: [
                {
                    name: "가평 번지점프",
                    description: "북한강 위에서 즐기는 스릴 만점 번지점프. 높이 50m.",
                    distance: "차량 15분",
                    image: "/hottub.png",
                    link: "https://map.naver.com/...",
                },
                {
                    name: "레일바이크",
                    description: "폐선된 철로를 달리는 레일바이크. 가족 단위 추천 코스입니다.",
                    distance: "차량 10분",
                    image: "/hero.png",
                    link: "https://map.naver.com/...",
                },
                {
                    name: "수상레저 체험",
                    description: "제트스키, 바나나보트 등 다양한 수상 레저를 체험할 수 있습니다.",
                    distance: "차량 8분",
                    image: "/dinner.png",
                    link: "https://map.naver.com/...",
                },
            ],
        },
    ],
};

export default function NearbyPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/hottub.png"
                    alt="Nearby"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="section-subheading text-secondary mb-4 block">
                        Nearby
                    </span>
                    <h1 className="display-heading text-4xl md:text-6xl text-white">
                        주변 관광지
                    </h1>
                </div>
            </section>

            {/* Categories */}
            {NEARBY_DATA.categories.map((category, idx) => (
                <Section key={category.id} background={idx % 2 === 0 ? "white" : "muted"}>
                    <h2 className="text-3xl font-serif font-bold text-primary mb-12 flex items-center gap-4">
                        <span className="text-4xl filter drop-shadow-sm">{category.icon}</span>
                        {category.name}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.places.map((place, index) => (
                            <div
                                key={index}
                                className="group bg-background rounded-2xl shadow-sm overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={place.image}
                                        alt={place.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="card-heading text-xl">
                                            {place.name}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                                            <Clock className="w-3 h-3" />
                                            {place.distance}
                                        </div>
                                    </div>
                                    
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                        {place.description}
                                    </p>

                                    <div className="pt-4 border-t border-border/50 flex justify-end">
                                        <Button 
                                            size="sm" 
                                            variant="ghost" 
                                            className="gap-2 text-primary hover:text-secondary p-0 h-auto hover:bg-transparent"
                                            href={place.link}
                                            external
                                        >
                                            <MapPin className="w-4 h-4" />
                                            지도 보기
                                            <ExternalLink className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            ))}

            <Footer />
        </main>
    );
}

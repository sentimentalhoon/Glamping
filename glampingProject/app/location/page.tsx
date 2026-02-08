
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NaverMap } from "@/components/location/NaverMap";
import Image from "next/image";
import { MapPin, Car, Bus, Phone } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// TODO: 이 데이터들을 DB 또는 CMS에서 가져오도록 변경
const LOCATION_DATA = {
    address: {
        road: "경기도 가평군 청평면 호반로 000-00",
        jibun: "경기도 가평군 청평면 삼회리 000-0",
    },
    addressDetail: "루미나 글램핑 (Lumina Glamping)",
    contact: {
        phone: "031-000-0000",
        email: "info@luminaglamping.com",
    },
    mapUrl: {
        naver: "https://map.naver.com/",
        kakao: "https://map.kakao.com/",
    },
    directions: {
        car: [
            "서울양양고속도로 → 청평IC 진출",
            "좌회전 후 호반로 따라 약 10분",
            "네비게이션 검색: '루미나 글램핑'",
        ],
        publicTransport: [
            "청평역 하차 → 택시 약 15분",
            "가평역 → 가평버스터미널 → 청평행 버스",
            "버스 이용 시 '삼회리 입구' 정류장 하차",
        ],
    },
};

export default function LocationPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/hero.png"
                    alt="Location"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="section-subheading text-secondary mb-4 block">
                        Location
                    </span>
                    <h1 className="display-heading text-4xl md:text-6xl text-white">
                        오시는 길
                    </h1>
                </div>
            </section>

            {/* Content */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Info */}
                    <div className="space-y-12">
                        {/* Address */}
                        <div>
                            <SectionHeader 
                                title="주소 및 연락처" 
                                align="left"
                                className="mb-6"
                            />
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-foreground mb-2">
                                        {LOCATION_DATA.address.road}
                                    </p>
                                    <p className="text-muted-foreground mb-4">
                                        {LOCATION_DATA.addressDetail}
                                    </p>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="secondary" href={LOCATION_DATA.mapUrl.naver} external>
                                            네이버 지도
                                        </Button>
                                        <Button size="sm" variant="outline" href={LOCATION_DATA.mapUrl.kakao} external>
                                            카카오 맵
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="card-heading mb-6">연락처</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-foreground">
                                        {LOCATION_DATA.contact.phone}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {LOCATION_DATA.contact.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
                        <NaverMap />
                    </div>
                </div>
            </Section>

            {/* Directions */}
            <Section background="muted">
                <SectionHeader 
                    title="오시는 방법" 
                    subtitle="Directions"
                    description="대중교통과 자가용 이용 시 오시는 길을 안내해 드립니다."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Public Transport */}
                    <div className="card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                                <Bus className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="card-heading mb-0">대중교통 이용 시</h3>
                        </div>
                        <ul className="space-y-4">
                            {LOCATION_DATA.directions.publicTransport.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-foreground/80 leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Car */}
                    <div className="card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                                <Car className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="card-heading mb-0">자가용 이용 시</h3>
                        </div>
                        <ul className="space-y-4">
                            {LOCATION_DATA.directions.car.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-foreground/80 leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}

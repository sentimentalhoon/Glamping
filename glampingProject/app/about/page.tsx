import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingWidget } from "@/components/home/BookingWidget";
import Image from "next/image";
import { Heart, Leaf, Shield, Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";

// TODO: 이 데이터들을 DB 또는 CMS에서 가져오도록 변경
const ABOUT_DATA = {
    story: {
        title: "루미나 글램핑의 이야기",
        paragraphs: [
            "2019년, 저희 부부는 도시의 바쁜 일상에서 벗어나 자연 속에서 진정한 휴식을 즐길 수 있는 공간을 꿈꾸기 시작했습니다.",
            "가평의 울창한 숲과 맑은 계곡을 보며, 이곳에서 많은 분들이 일상의 피로를 내려놓고 소중한 사람들과 특별한 시간을 보낼 수 있기를 바랐습니다.",
            "2021년 첫 손님을 맞이한 이후, 루미나 글램핑은 '빛나는 추억을 만드는 곳'이라는 이름처럼 수많은 가족, 연인, 친구들의 소중한 순간들을 함께해 왔습니다.",
            "앞으로도 자연과 사람이 조화롭게 어우러지는 특별한 공간으로 여러분을 맞이하겠습니다.",
        ],
    },
    values: [
        {
            icon: Heart,
            title: "진심을 담은 서비스",
            description:
                "고객 한 분 한 분을 가족처럼 생각하며, 최상의 서비스로 특별한 추억을 선물해 드립니다.",
        },
        {
            icon: Leaf,
            title: "자연과의 조화",
            description:
                "자연을 훼손하지 않고 보존하며, 친환경 운영을 통해 지속 가능한 글램핑 문화를 만들어 갑니다.",
        },
        {
            icon: Shield,
            title: "안전과 청결",
            description:
                "철저한 위생 관리와 안전 점검으로 안심하고 머물 수 있는 환경을 제공합니다.",
        },
        {
            icon: Star,
            title: "프리미엄 경험",
            description:
                "호텔의 편안함과 자연의 아름다움을 동시에 즐길 수 있는 최고급 시설을 갖추고 있습니다.",
        },
    ],
    team: {
        title: "루미나 팀",
        greeting:
            "안녕하세요, 루미나 글램핑을 운영하고 있는 대표 김루미나입니다. 저희 팀은 고객 여러분께 최고의 글램핑 경험을 제공하기 위해 항상 노력하고 있습니다. 무엇이든 불편한 점이 있으시면 언제든지 말씀해 주세요. 루미나에서 빛나는 추억을 만들어 가시길 바랍니다.",
    },
    stats: [
        { label: "운영 시작", value: "2021년" },
        { label: "누적 방문객", value: "5,000+" },
        { label: "평균 별점", value: "4.8" },
        { label: "객실 수", value: "12개" },
    ],
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src="/hero.png"
                    alt="About"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="section-subheading text-secondary mb-4 block">
                        About Us
                    </span>
                    <h1 className="display-heading text-4xl md:text-7xl">
                        루미나 글램핑
                    </h1>
                    <p className="text-xl text-white/80 font-light mt-4">
                        빛나는 추억을 만드는 곳
                    </p>
                </div>
            </section>

            {/* Story */}
            <Section background="white">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader 
                        title={ABOUT_DATA.story.title}
                        description=" "
                    />
                    <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-center">
                        {ABOUT_DATA.story.paragraphs.map((paragraph, index) => (
                            <p key={index} className="break-keep">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Stats */}
            <Section background="primary">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {ABOUT_DATA.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-5xl font-serif font-bold text-secondary mb-2">
                                {stat.value}
                            </p>
                            <p className="text-primary-foreground/70">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Values */}
            <Section>
                <SectionHeader title="우리의 가치" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ABOUT_DATA.values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <value.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="card-heading mb-4">
                                {value.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed break-keep">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Team Greeting */}
            <Section background="white">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-xl flex-shrink-0 border-4 border-white">
                        <Image
                            src="/interior.png" // Placeholder, maybe should be person
                            alt="대표 인사"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="section-heading mb-2">
                            {ABOUT_DATA.team.title}
                        </h2>
                        <div className="w-16 h-1 bg-secondary mx-auto md:mx-0"></div>
                        <p className="text-lg text-foreground/80 leading-relaxed break-keep">
                            {ABOUT_DATA.team.greeting}
                        </p>
                        <p className="text-primary font-bold text-xl font-serif">
                            - 대표 김루미나 드림
                        </p>
                    </div>
                </div>
            </Section>

            <BookingWidget />
            <Footer />
        </main>
    );
}

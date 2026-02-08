import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// TODO: 이 데이터들을 DB 또는 CMS에서 가져오도록 변경
const FAQ_DATA = {
    categories: [
        {
            name: "예약 관련",
            items: [
                {
                    question: "예약은 어떻게 하나요?",
                    answer: "홈페이지 예약 위젯을 통해 원하시는 날짜와 객실을 선택하여 예약하실 수 있습니다. 전화 예약도 가능하며, 예약금 입금 후 예약이 확정됩니다.",
                },
                {
                    question: "예약 취소 및 환불 규정은 어떻게 되나요?",
                    answer: "체크인 7일 전: 100% 환불\n체크인 3~6일 전: 50% 환불\n체크인 2일 전~당일: 환불 불가\n성수기(7~8월, 공휴일)의 경우 별도 규정이 적용될 수 있습니다.",
                },
                {
                    question: "체크인/체크아웃 시간은 어떻게 되나요?",
                    answer: "체크인은 오후 3시(15:00)부터, 체크아웃은 오전 11시(11:00)까지입니다. 얼리 체크인이나 레이트 체크아웃을 원하시면 사전에 문의해 주세요.",
                },
                {
                    question: "예약 인원 추가가 가능한가요?",
                    answer: "기준 인원 초과 시 추가 요금이 발생합니다. 객실별 최대 수용 인원을 초과하는 예약은 불가능합니다. 자세한 사항은 객실 안내 페이지를 참고해 주세요.",
                },
            ],
        },
        {
            name: "시설 관련",
            items: [
                {
                    question: "주차는 어디에 하나요?",
                    answer: "각 객실마다 전용 주차 공간이 마련되어 있습니다. 주차 요금은 무료이며, 대형 차량의 경우 사전에 말씀해 주시면 안내해 드립니다.",
                },
                {
                    question: "바베큐 시설이 있나요?",
                    answer: "모든 객실에 전용 바베큐 그릴이 구비되어 있습니다. 숯과 장작은 별도 구매하시거나 바베큐 세트를 주문하시면 함께 제공됩니다.",
                },
                {
                    question: "와이파이 사용이 가능한가요?",
                    answer: "전 객실 및 공용 공간에서 무료 와이파이를 이용하실 수 있습니다.",
                },
                {
                    question: "침구류와 세면도구가 제공되나요?",
                    answer: "깨끗한 침구류와 수건, 기본 세면도구(샴푸, 바디워시, 치약)가 제공됩니다. 개인 칫솔은 지참해 주세요.",
                },
            ],
        },
        {
            name: "체험/기타",
            items: [
                {
                    question: "반려동물 동반이 가능한가요?",
                    answer: "반려동물 동반은 현재 불가능합니다. 다른 손님들의 편안한 휴식을 위해 양해 부탁드립니다.",
                },
                {
                    question: "주변에 볼거리가 있나요?",
                    answer: "청평호, 자라섬, 쁘띠프랑스 등 가평의 다양한 관광 명소가 차로 10~20분 거리에 있습니다. 자세한 내용은 '주변 관광지' 페이지를 참고해 주세요.",
                },
                {
                    question: "불꽃놀이나 폭죽 사용이 가능한가요?",
                    answer: "화재 및 안전상의 이유로 불꽃놀이, 폭죽, 풍등 등은 사용이 금지되어 있습니다. 적발 시 퇴실 조치될 수 있습니다.",
                },
                {
                    question: "음식물 반입이 가능한가요?",
                    answer: "음식물 반입은 자유롭습니다. 단, 퇴실 시 쓰레기는 분리수거하여 지정된 장소에 버려주시기 바랍니다.",
                },
            ],
        },
    ],
};

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/hero.png"
                    alt="FAQ"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="section-subheading text-secondary mb-4 block">
                        FAQ
                    </span>
                    <h1 className="display-heading text-4xl md:text-6xl text-white">
                        자주 묻는 질문
                    </h1>
                </div>
            </section>

            {/* FAQ Categories */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    {FAQ_DATA.categories.map((category, index) => (
                        <div key={index} className="mb-16 last:mb-0">
                            <SectionHeader 
                                title={category.name} 
                                align="left"
                                className="mb-8"
                            />
                            <FaqAccordion items={category.items} />
                        </div>
                    ))}
                </div>
            </Section>

            {/* Contact CTA */}
            <Section background="muted">
                <div className="text-center">
                    <h3 className="section-heading mb-4">
                        원하시는 답변을 찾지 못하셨나요?
                    </h3>
                    <p className="text-foreground/80 mb-8 text-lg">
                        언제든지 연락 주시면 친절하게 안내해 드리겠습니다.
                    </p>
                    <Button variant="primary" size="lg" href="tel:031-000-0000">
                        전화 문의하기
                    </Button>
                </div>
            </Section>

            <Footer />
        </main>
    );
}

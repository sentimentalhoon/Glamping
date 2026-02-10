import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReviewCard, Review } from "@/components/reviews/ReviewCard";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// TODO: 이 데이터들을 DB에서 가져오도록 변경
// 현재는 정적 데이터로 샘플 후기를 표시
const REVIEWS_DATA: Review[] = [
    {
        id: "1",
        author: "김**",
        roomType: "포레스트 돔",
        date: "2024년 10월",
        rating: 5,
        content:
            "정말 힐링 그 자체였습니다. 숲 속에서 듣는 새소리와 함께 아침을 맞이하니 도시에서 받은 스트레스가 다 풀리는 기분이었어요. 자쿠지에서 별 보면서 와인 마시는 건 진짜 최고였습니다. 다음에는 부모님 모시고 다시 오고 싶어요!",
        image: "/interior.png",
    },
    {
        id: "2",
        author: "이**",
        roomType: "스타라이트 돔",
        date: "2024년 9월",
        rating: 5,
        content:
            "아이들이 너무 좋아했어요! 천체 망원경으로 달도 보고, 투명 돔 천장으로 별똥별도 봤답니다. 가족 여행으로 정말 최고의 선택이었습니다. 시설도 깔끔하고 직원분들도 친절하셨어요.",
        image: "/hero.png",
    },
    {
        id: "3",
        author: "박**",
        roomType: "패밀리 캐빈",
        date: "2024년 8월",
        rating: 4,
        content:
            "넓은 공간에서 가족들과 편하게 바베큐 하면서 보냈습니다. 조용하고 프라이빗해서 좋았어요. 다만 성수기라 그런지 가격이 조금 부담스러웠지만, 시설 퀄리티를 생각하면 납득이 됩니다.",
        image: "/dinner.png",
    },
    {
        id: "4",
        author: "최**",
        roomType: "포레스트 돔",
        date: "2024년 7월",
        rating: 5,
        content:
            "연인과의 기념일 여행으로 방문했는데, 분위기가 정말 로맨틱했습니다. 꽃 장식 데코레이션 옵션도 신청했는데 기대 이상이었어요. 사진 찍기에도 너무 좋았습니다.",
    },
    {
        id: "5",
        author: "정**",
        roomType: "스타라이트 돔",
        date: "2024년 6월",
        rating: 5,
        content:
            "친구들과 우정 여행으로 다녀왔어요. 밤새 수다 떨면서 별 보고, 아침에는 주변 산책하면서 힐링했습니다. 위치도 찾기 쉽고 주차도 편해서 좋았어요.",
        image: "/hottub.png",
    },
    {
        id: "6",
        author: "한**",
        roomType: "패밀리 캐빈",
        date: "2024년 5월",
        rating: 4,
        content:
            "3가족이 함께 갔는데 충분히 넓었습니다. 아이들 놀 공간도 있고, 어른들은 바베큐 하면서 이야기 나누기 좋았어요. 재방문 의사 100%입니다!",
    },
];

export default function ReviewsPage() {
    // TODO: 평균 별점 계산을 서버에서 처리하도록 변경
    const averageRating =
        REVIEWS_DATA.reduce((sum, r) => sum + r.rating, 0) / REVIEWS_DATA.length;

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Page Header */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/interior.png"
                    alt="Reviews"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 text-center text-white">
                    <span className="section-subheading text-secondary mb-4 block">
                        Reviews
                    </span>
                    <h1 className="display-heading text-4xl md:text-6xl text-white">
                        고객 후기
                    </h1>
                </div>
            </section>

            {/* Stats */}
            <Section background="white">
                <div className="text-center">
                    <div className="inline-flex items-center gap-8 bg-primary/5 px-10 py-6 rounded-full border border-primary/10">
                        <div className="flex flex-col items-center">
                            <div className="flex items-end gap-1">
                                <span className="text-5xl font-serif font-bold text-primary">
                                    {averageRating.toFixed(1)}
                                </span>
                                <span className="text-2xl text-primary/60 mb-2">/5</span>
                            </div>
                            <div className="flex gap-1 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-secondary text-sm">★</span>
                                ))}
                            </div>
                        </div>
                        <div className="h-12 w-px bg-border" />
                        <div className="text-left">
                            <p className="text-muted-foreground text-sm font-medium">총 리뷰</p>
                            <p className="text-3xl font-bold text-primary">
                                {REVIEWS_DATA.length}건
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Reviews Grid */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REVIEWS_DATA.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-primary/5">
                <div className="text-center max-w-2xl mx-auto">
                    <SectionHeader 
                        title="더 웨스턴 글램핑을 경험해 보세요" 
                        description="특별한 추억을 만들어 드리겠습니다."
                        className="mb-8"
                    />
                    <Button size="lg" href="/">
                        예약하러 가기
                    </Button>
                </div>
            </Section>

            <Footer />
        </main>
    );
}

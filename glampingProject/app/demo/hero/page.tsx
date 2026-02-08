import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function DemoIndex() {
    const demos = [
        { title: "Ken Burns Effect", desc: "천천히 확대되는 깊이감 있는 효과", path: "/demo/hero/ken-burns" },
        { title: "Parallax Scrolling", desc: "스크롤에 따라 입체적으로 움직이는 배경", path: "/demo/hero/parallax" },
        { title: "Premium Gradient", desc: "브랜드 컬러를 활용한 고급스러운 오버레이", path: "/demo/hero/gradient" },
        { title: "Morning Mist", desc: "고요한 새벽 안개를 형상화한 애니메이션", path: "/demo/hero/mist" },
        { title: "Artistic Reveal", desc: "흐릿한 상태에서 선명하게 깨어나는 감성적 연출", path: "/demo/hero/reveal" },
        { title: "Cinemagraph Video", desc: "고화질 풍경 영상을 활용한 역동적 배경", path: "/demo/hero/video" },
        { title: "Video + Parallax", desc: "영상 배경과 패럴랙스의 환상적인 조합", path: "/demo/hero/video-parallax" },
        { title: "Video + Reveal", desc: "서서히 깨어나는 역동적인 첫인상", path: "/demo/hero/video-reveal" },
        { title: "Ultimate Combo", desc: "모든 프리미엄 효과가 어우러진 시그니처 연출", path: "/demo/hero/ultimate" },
    ];

    return (
        <Section className="pt-40">
            <SectionHeader 
                title="배경 이미지 효과 데모" 
                subtitle="Design Preview"
                description="히어로 섹션의 분위기를 결정할 다양한 시각적 효과들을 미리 확인해보세요."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {demos.map((demo) => (
                    <Link 
                        key={demo.path} 
                        href={demo.path}
                        className="group bg-surface p-8 rounded-2xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors italic">{demo.title}</h3>
                        <p className="text-foreground/70 mb-6">{demo.desc}</p>
                        <span className="text-sm font-medium text-primary inline-flex items-center gap-2">
                            프리뷰 보기 
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </Link>
                ))}
            </div>
            
            <div className="mt-20 text-center">
                <Button href="/" variant="outline">홈으로 돌아가기</Button>
            </div>
        </Section>
    );
}

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="brand-wordmark text-2xl text-secondary">마차뷰클럽</h3>
                        <p className="text-primary-foreground/80 leading-relaxed max-w-sm break-keep">
                            마차뷰클럽 글램핑장 멤버십은 자연 속 프라이빗 휴식과 자산 가치를 함께 제안합니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold tracking-[-0.01em] text-secondary">바로가기</h4>
                        <ul className="space-y-2">
                            <li><Link href="/#philosophy" className="text-primary-foreground/70 hover:text-secondary transition-colors">브랜드 철학</Link></li>
                            <li><Link href="/#ownership" className="text-primary-foreground/70 hover:text-secondary transition-colors">멤버십 혜택</Link></li>
                            <li><Link href="/#inquiry" className="text-primary-foreground/70 hover:text-secondary transition-colors">투어 상담 요청</Link></li>
                            <li><Link href="/accommodations" className="text-primary-foreground/70 hover:text-secondary transition-colors">객실 안내</Link></li>
                            <li><Link href="/amenities" className="text-primary-foreground/70 hover:text-secondary transition-colors">부대시설</Link></li>
                            <li><Link href="/gallery" className="text-primary-foreground/70 hover:text-secondary transition-colors">갤러리</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold tracking-[-0.01em] text-secondary">연락처</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-primary-foreground/70">
                                <MapPin size={20} className="shrink-0 mt-1" />
                                <span>전북 부안군 변산면 채석강길 8-8</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/70">
                                <Phone size={20} className="shrink-0" />
                                <span>031-1234-5678</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/70">
                                <Mail size={20} className="shrink-0" />
                                <span>stay@the-western-glamping.kr</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
                    <p>&copy; {new Date().getFullYear()} MachaView Club Glamping. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-secondary transition-colors">개인정보처리방침</Link>
                        <Link href="/terms" className="hover:text-secondary transition-colors">이용약관</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

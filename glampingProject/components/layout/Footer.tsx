import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold tracking-wider text-secondary">루미나</h3>
                        <p className="text-primary-foreground/80 leading-relaxed max-w-sm break-keep">
                            자연을 해치지 않는 럭셔리. 숲 속 깊은 곳에서 경험하는 최고의 글램핑 휴가를 선사합니다.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-serif font-medium text-secondary">둘러보기</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">브랜드 스토리</Link></li>
                            <li><Link href="/accommodations" className="text-primary-foreground/70 hover:text-secondary transition-colors">객실 안내</Link></li>
                            <li><Link href="/amenities" className="text-primary-foreground/70 hover:text-secondary transition-colors">부대시설</Link></li>
                            <li><Link href="/gallery" className="text-primary-foreground/70 hover:text-secondary transition-colors">갤러리</Link></li>
                            <li><Link href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">자주 묻는 질문</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-serif font-medium text-secondary">연락처</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-primary-foreground/70">
                                <MapPin size={20} className="shrink-0 mt-1" />
                                <span>전북 부안군 변산면 노루목길 8-8</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/70">
                                <Phone size={20} className="shrink-0" />
                                <span>031-1234-5678</span>
                            </li>
                            <li className="flex items-center space-x-3 text-primary-foreground/70">
                                <Mail size={20} className="shrink-0" />
                                <span>stay@luminaglamping.kr</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Lumina Glamping. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-secondary transition-colors">개인정보처리방침</Link>
                        <Link href="#" className="hover:text-secondary transition-colors">이용약관</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

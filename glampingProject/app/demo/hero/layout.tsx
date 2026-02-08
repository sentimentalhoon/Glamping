import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen">
            <Navbar />
            <main>{children}</main>
            {/* Demo Navigator Overlay */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-background/80 backdrop-blur-md border border-border px-6 py-3 rounded-full shadow-2xl flex gap-4 text-sm font-medium">
                <Link href="/demo/hero" className="hover:text-primary transition-colors">데모 목록</Link>
                <div className="w-px h-4 bg-border my-auto" />
                <Link href="/demo/hero/ken-burns" className="hover:text-primary transition-colors">Ken Burns</Link>
                <Link href="/demo/hero/parallax" className="hover:text-primary transition-colors">Parallax</Link>
                <Link href="/demo/hero/gradient" className="hover:text-primary transition-colors">Gradient</Link>
                <Link href="/demo/hero/mist" className="hover:text-primary transition-colors">Mist</Link>
                <Link href="/demo/hero/reveal" className="hover:text-primary transition-colors">Reveal</Link>
                <Link href="/demo/hero/video" className="hover:text-primary transition-colors">Video</Link>
                <Link href="/demo/hero/video-parallax" className="hover:text-primary transition-colors">V-Parallax</Link>
                <Link href="/demo/hero/video-reveal" className="hover:text-primary transition-colors">V-Reveal</Link>
                <Link href="/demo/hero/ultimate" className="font-bold text-secondary hover:text-primary transition-colors">Ultimate</Link>
            </div>
            <Footer />
        </div>
    );
}

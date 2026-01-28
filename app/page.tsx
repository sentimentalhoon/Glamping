import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Features } from "@/components/home/Features";
import { Gallery } from "@/components/home/Gallery";
import { BookingWidget } from "@/components/home/BookingWidget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <Features />
      <Gallery />
      <BookingWidget />
      <Footer />
    </main>
  );
}

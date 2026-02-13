import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { LocationSection } from "@/components/home/LocationSection";
import { TheCollection } from "@/components/home/TheCollection";
import { OwnershipBenefits } from "@/components/home/OwnershipBenefits";
import { Gallery } from "@/components/home/Gallery";
import { PrivateInquiry } from "@/components/home/PrivateInquiry";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <OwnershipBenefits />
      <TheCollection />
      <BrandPhilosophy />
      <Gallery />
      <LocationSection />
      <PrivateInquiry />
      <Footer />
    </main>
  );
}

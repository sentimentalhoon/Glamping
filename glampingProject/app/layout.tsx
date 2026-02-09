import type { Metadata, Viewport } from "next";
import { Nanum_Myeongjo, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1A2F23" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina-glamping.com"), // Placeholder URL
  title: {
    default: "루미나 프라이빗 에스테이트 | 변산반도 프리미엄 럭셔리 글램핑",
    template: "%s | 루미나 프라이빗 에스테이트",
  },
  description: "국내 유일의 프라이빗 비치와 숲속 글램핑. 루미나 프라이빗 에스테이트에서 완벽한 휴식과 하이엔드 아웃도어 라이프를 경험하세요. 100% 예약제 프라이빗 리조트.",
  keywords: [
    "글램핑", "럭셔리 글램핑", "변산반도 숙소", "부안 펜션", "프라이빗 풀빌라", 
    "루미나", "Lumina", "캠핑장", "호캉스", "전북 여행", "커플 여행", 
    "감성 숙소", "오션뷰", "숲속 힐링", "프라이빗 비치", "노천탕"
  ],
  authors: [{ name: "Lumina Glamping" }],
  creator: "Lumina Private Estate",
  publisher: "Lumina Private Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "루미나 프라이빗 에스테이트 | 자연 속의 프리미엄 쉼터",
    description: "야생의 아름다움과 호텔의 편안함이 공존하는 곳. 루미나에서 잊지 못할 추억을 만드세요.",
    url: "https://lumina-glamping.com",
    siteName: "루미나 프라이빗 에스테이트 (Lumina Private Estate)",
    images: [
      {
        url: "/hero.png", // Fallback image used as OG image
        width: 1200,
        height: 630,
        alt: "Lumina Glamping Hero Image",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "루미나 프라이빗 에스테이트",
    description: "변산반도의 숨겨진 보석, 루미나 프라이빗 에스테이트로 초대합니다.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "naver-site-verification": "naver-site-verification-placeholder",
    },
  },
  alternates: {
    canonical: "https://lumina-glamping.com",
    languages: {
      "ko-KR": "https://lumina-glamping.com",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "루미나 프라이빗 에스테이트",
  "alternateName": "Lumina Private Estate",
  "url": "https://lumina-glamping.com",
  "logo": "https://lumina-glamping.com/logo.png",
  "image": "https://lumina-glamping.com/hero.png",
  "description": "변산반도 국립공원 내 위치한 프리미엄 럭셔리 글램핑 리조트. 프라이빗 비치와 숲속 독채 객실 제공.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "전북 부안군 변산면 노루목길 8-8",
    "addressLocality": "부안군",
    "addressRegion": "전라북도",
    "postalCode": "56349",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.656426,
    "longitude": 126.501408
  },
  "telephone": "+82-2-000-0000",
  "priceRange": "₩300,000 - ₩800,000",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Private Beach",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Forest View",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Luxury Bedding",
      "value": true
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notoSansKr.variable} ${nanumMyeongjo.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

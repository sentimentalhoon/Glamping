import type { Metadata, Viewport } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://the-western-glamping.com";
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const NAVER_SITE_VERIFICATION = process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION;

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "더 웨스턴 글램핑 | 변산반도 프리미엄 럭셔리 글램핑",
    template: "%s | 더 웨스턴 글램핑",
  },
  description: "국내 유일의 프라이빗 비치와 숲속 글램핑. 더 웨스턴 글램핑에서 완벽한 휴식과 하이엔드 아웃도어 라이프를 경험하세요. 100% 예약제 프라이빗 리조트.",
  keywords: [
    "글램핑", "럭셔리 글램핑", "변산반도 숙소", "부안 펜션", "프라이빗 풀빌라", 
    "더 웨스턴", "The Western", "캠핑장", "호캉스", "전북 여행", "커플 여행", 
    "감성 숙소", "오션뷰", "숲속 힐링", "프라이빗 비치", "노천탕"
  ],
  authors: [{ name: "The Western Glamping" }],
  creator: "The Western Glamping",
  publisher: "The Western Glamping",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "더 웨스턴 글램핑 | 자연 속의 프리미엄 쉼터",
    description: "야생의 아름다움과 호텔의 편안함이 공존하는 곳. 더 웨스턴에서 잊지 못할 추억을 만드세요.",
    url: SITE_URL,
    siteName: "더 웨스턴 글램핑 (The Western Glamping)",
    images: [
      {
        url: "/hero.png", // Fallback image used as OG image
        width: 1200,
        height: 630,
        alt: "The Western Glamping Hero Image",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "더 웨스턴 글램핑",
    description: "변산반도의 숨겨진 보석, 더 웨스턴 글램핑으로 초대합니다.",
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
    ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
    ...(NAVER_SITE_VERIFICATION
      ? {
          other: {
            "naver-site-verification": NAVER_SITE_VERIFICATION,
          },
        }
      : {}),
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ko-KR": SITE_URL,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "더 웨스턴 글램핑",
  "alternateName": "The Western Glamping",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": `${SITE_URL}/hero.png`,
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
  "telephone": "+82-31-1234-5678",
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
      <body className="antialiased">
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

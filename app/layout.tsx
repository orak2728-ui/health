import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://health-lovat-five.vercel.app"),
  title: "최원락내과 | 암·만성질환 조기 발견과 지속 관리",
  description:
    "오랜 임상 경험과 정확한 설명으로 검사 결과의 의미를 함께 살피고, 지금의 질환뿐 아니라 앞으로의 건강 위험까지 관리하는 내과입니다.",
  openGraph: {
    title: "최원락내과 | 암·만성질환 조기 발견과 지속 관리",
    description:
      "오랜 임상 경험과 정확한 설명으로 검사 결과의 의미를 함께 살피고, 지금의 질환뿐 아니라 앞으로의 건강 위험까지 관리하는 내과입니다.",
    siteName: "최원락 내과의원",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "최원락내과 | 암·만성질환 조기 발견과 지속 관리",
    description:
      "오랜 임상 경험과 정확한 설명으로 검사 결과의 의미를 함께 살피고, 지금의 질환뿐 아니라 앞으로의 건강 위험까지 관리하는 내과입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

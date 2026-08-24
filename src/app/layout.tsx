import type { Metadata } from "next";
import { Noto_Sans_SC, Poppins } from "next/font/google";
import "./globals.css";

// Primary body font — covers Simplified Chinese + Latin characters.
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

// Display font for the English wordmark, stat numbers, and accents.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jinese Wong | 户外旅行 · 独自出发 · 打工度假",
  description:
    "Jinese Wong 的户外旅行日记 —— 分享徒步路线、女生独旅故事与打工度假攻略，陪你勇敢走向山野与远方。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

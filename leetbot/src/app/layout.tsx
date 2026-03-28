import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeetBot — Where careers go to die",
  description: "Get ruthlessly roasted by TLE, the world's most toxic AI code reviewer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} dark h-full`}>
      <body className="min-h-full bg-gray-950 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}

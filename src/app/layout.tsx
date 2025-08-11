import type { Metadata } from "next";
import { Arima, Geist_Mono } from "next/font/google";
import "./globals.css";

const arimaSans = Arima({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consolation Lotachi Kem | Frontend Developer Portfolio",
  description:
    "Portfolio of Consolation Lotachi Kem, a skilled Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Consolation Lotachi Kem",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Web Development",
    "UI/UX Implementation",
    "Frontend Engineer",
  ],
  authors: [{ name: "Consolation Lotachi Kem" }],
  creator: "Consolation Lotachi Kem",
  publisher: "Consolation Lotachi Kem",
  metadataBase: new URL("https://techieconso.vercel.app"),
  alternates: {
    canonical: "https://techieconso.vercel.app",
  },
  openGraph: {
    title: "Consolation Lotachi Kem | Frontend Developer Portfolio",
    description:
      "Explore my projects, skills, and experience as a Frontend Developer specializing in modern, responsive, and high-performance web applications.",
    url: "https://techieconso.vercel.app",
    siteName: "Consolation Lotachi Kem Portfolio",
    images: [
      {
        url: "/Assets/Pic3.JPG",
        width: 1200,
        height: 630,
        alt: "Consolation Lotachi Kem Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consolation Lotachi Kem | Frontend Developer Portfolio",
    description:
      "Explore my projects, skills, and experience as a Frontend Developer specializing in modern, responsive, and high-performance web applications.",
    images: ["/Assets/Pic1.JPG"],
    creator: "@techieconso",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimaSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Arima, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/components/ClientThemeProvider";

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
  title: "Consolation Lotachi Kem | FrontEnd Engineer Portfolio",
  description:
    "Portfolio of Consolation Lotachi Kem, a skilled FrontEnd Engineer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, skills, and experience in web development.",
  keywords: [
    "Consolation Lotachi Kem",
    "FrontEnd Engineer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Web Development",
    "UI/UX Implementation",
    "Frontend Engineer",
    "JavaScript Developer",
    "CSS Developer",
    "HTML Developer",
    "Responsive Web Design",
    "Modern Web Applications",
    "Portfolio Website",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Consolation Lotachi Kem" }],
  creator: "Consolation Lotachi Kem",
  publisher: "Consolation Lotachi Kem",
  metadataBase: new URL("https://techieconso.vercel.app"),
  alternates: {
    canonical: "https://techieconso.vercel.app",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code", // Add if needed
    yahoo: "your-yahoo-verification-code", // Add if needed
  },
  category: "technology",
  classification: "Portfolio",
  openGraph: {
    title: "Consolation Lotachi Kem | FrontEnd Engineer Portfolio",
    description:
      "Explore my projects, skills, and experience as a FrontEnd Engineer specializing in modern, responsive, and high-performance web applications.",
    url: "https://techieconso.vercel.app",
    siteName: "Consolation Lotachi Kem Portfolio",
    images: [
      {
        url: "/Assets/Pic3.JPG",
        width: 1200,
        height: 630,
        alt: "Consolation Lotachi Kem Portfolio Preview",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Nigeria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consolation Lotachi Kem | FrontEnd Engineer Portfolio",
    description:
      "Explore my projects, skills, and experience as a FrontEnd Engineer specializing in modern, responsive, and high-performance web applications.",
    images: ["/Assets/Pic1.JPG"],
    creator: "@techieconso",
    site: "@techieconso",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Consolation Portfolio",
    "application-name": "Consolation Portfolio",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Structured Data for Portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Consolation Lotachi Kem",
              jobTitle: "FrontEnd Engineer",
              description: "FrontEnd Engineer specializing in React, Next.js, TypeScript, and modern web technologies",
              url: "https://techieconso.vercel.app",
              sameAs: [
                "https://github.com/techieconso",
                "https://linkedin.com/in/techieconso",
                "https://twitter.com/techieconso"
              ],
              knowsAbout: [
                "React",
                "Next.js", 
                "TypeScript",
                "JavaScript",
                "CSS",
                "HTML",
                "Web Development",
                "Frontend Engineering"
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Nigeria"
              }
            })
          }}
        />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Consolation Lotachi Kem Portfolio",
              description: "Portfolio website showcasing web development projects and skills",
              url: "https://techieconso.vercel.app",
              author: {
                "@type": "Person",
                name: "Consolation Lotachi Kem"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://techieconso.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${arimaSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Consolation Lotachi Kem - FrontEnd Engineer",
  description:
    "Explore the complete portfolio of Consolation Lotachi Kem, featuring all projects including BoroFuel, ASAP DBA, Blunt Tribe, Nexkro, Aerysyn, MagicGames, and more. View detailed project information, tech stacks, and live demos.",
  keywords: [
    "Portfolio",
    "Projects",
    "FrontEnd Engineer",
    "Web Development",
    "Next.js Projects",
    "React Projects",
    "TypeScript Projects",
  ],
  openGraph: {
    title: "Portfolio | Consolation Lotachi Kem - FrontEnd Engineer",
    description:
      "Explore the complete portfolio of projects built with modern web technologies including Next.js, React, and TypeScript.",
    url: "https://techieconso.vercel.app/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

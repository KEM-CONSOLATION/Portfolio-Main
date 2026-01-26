"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Skills from "@/components/Skills";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Nav />

      <main>
        <HeroSection />
        <Experience />
        <Skills />
        <ProjectsCarousel />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-primary-foreground hover:bg-primary/90 fixed bottom-24 left-6 z-50 transform animate-bounce rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <Image
            src="/Assets/ArrowUp.png"
            alt="Scroll to Top"
            width={24}
            height={24}
          />
        </button>
      )}

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </>
  );
}

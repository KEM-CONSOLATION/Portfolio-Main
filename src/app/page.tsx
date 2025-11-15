"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CustomCursor from "@/components/CustomCursor";
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
      <CustomCursor />
      <Nav />
      
      <main>
        <HeroSection />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110 animate-bounce"
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

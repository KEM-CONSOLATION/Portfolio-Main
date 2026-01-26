"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CustomCursor from "@/components/CustomCursor";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortfolioPage() {
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

      <main className="pt-20">
        <Projects />
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

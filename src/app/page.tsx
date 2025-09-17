"use client";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
        <Projects />
      </main>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110 animate-bounce"
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

      {/* WhatsApp Contact Button */}
      <div className="fixed bottom-8 right-6 z-50">
        <a
          href="https://wa.me/2347031896845"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-105 transition-transform duration-300"
          aria-label="Contact via WhatsApp"
        >
          <Image
            src="/Assets/WhatsappIcon.png"
            alt="WhatsApp Contact"
            width={200}
            height={50}
            priority
          />
        </a>
      </div>
    </>
  );
}

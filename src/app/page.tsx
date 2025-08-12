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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {showButton && (
        <div className="fixed bottom-8 left-6 z-50 animate-bounce ">
          <button onClick={scrollToTop} className=" cursor-pointer">
            <Image
              src="/Assets/ArrowUp.png"
              alt="Scroll to Top"
              width={40}
              height={40}
            />
          </button>
        </div>
      )}

      <div className="fixed bottom-8 right-6 z-50 animate-pulse">
        <a
          href="https://wa.me/2347031896845"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Assets/WhatsappIcon.png"
            alt="WhatsApp"
            width={200}
            height={50}
            priority={true}
          />
        </a>
      </div>

      <Nav />
      <HeroSection />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="sticky top-0 bg-gray-900 text-white">
        <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/Assets/Pic3.JPG"
                alt="Profile Picture"
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-lg">FrontEnd Engineer</p>
              <p className="text-sm text-gray-300">Consolation Lotachi Kem</p>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className={`transition-all duration-500 ease-in-out ${
      isScrolled 
        ? "fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-lg border-b border-border z-50" 
        : "sticky top-0 bg-background"
    }`}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4" data-aos="fade-right">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src="/Assets/Pic3.JPG"
              alt="Profile Picture"
              width={48}
              height={48}
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-lg">FrontEnd Engineer</p>
            <p className="text-sm text-gray-300">Consolation Lotachi Kem</p>
          </div>
        </div>

        <div className="flex items-center gap-6" data-aos="fade-left">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-2 rounded-md hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/KEM-CONSOLATION"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Image
              src="/Assets/gitHubIcon.svg"
              alt="GitHub Icon"
              width={24}
              height={24}
            />
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
            <Image
              src="/Assets/Pic3.JPG"
              alt="Profile Picture"
              width={32}
              height={32}
              className="object-cover"
              priority
            />
          </div>
          <p className="text-white font-medium text-sm">Consolation Kem</p>
        </div>

        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/KEM-CONSOLATION"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1"
            aria-label="GitHub Profile"
          >
            <Image
              src="/Assets/gitHubIcon.svg"
              alt="GitHub Icon"
              width={20}
              height={20}
            />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

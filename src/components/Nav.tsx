"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
          <p className=" text-black dark:text-white font-medium text-sm">Consolation Kem</p>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5 text-foreground" />
            ) : (
              <FaBars className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeMobileMenu}
        >
          <div 
            className="flex flex-col h-full bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src="/Assets/Pic3.JPG"
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="font-medium text-lg">Consolation Lotachi Kem</p>
                  <p className="text-sm text-muted-foreground">FrontEnd Engineer</p>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <FaTimes className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-4 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-all duration-200 py-4 px-6 rounded-xl bg-card hover:bg-accent border border-border hover:border-primary/30 hover:shadow-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Social Links */}
              <div className="flex justify-center gap-6 pt-8">
                <a
                  href="https://github.com/KEM-CONSOLATION"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-accent border border-border hover:border-primary/30 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Image
                    src="/Assets/gitHubIcon.svg"
                    alt="GitHub Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </a>
                <a
                  href="https://ng.linkedin.com/in/kem-consolation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-accent border border-border hover:border-primary/30 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Image
                    src="/Assets/link-square-02.svg"
                    alt="LinkedIn Icon"
                    width={24}
                    height={24}
                    className="filter brightness-0 invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

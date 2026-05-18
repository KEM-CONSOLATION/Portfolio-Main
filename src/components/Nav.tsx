"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  // Handle scrolling to hash after navigation
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // If it's a hash link and we're not on the home page, navigate to home first
    if (href.startsWith("#") && pathname !== "/") {
      e.preventDefault();
      router.push(`/${href}`);
      closeMobileMenu();
    } else if (href.startsWith("#")) {
      // If we're on home page, let default behavior handle smooth scroll
      closeMobileMenu();
    }
    // For regular links (like /portfolio), let default behavior handle it
  };

  if (!mounted) {
    return (
      <nav className="sticky top-0 bg-gray-900 text-white">
        <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-4 md:flex">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
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
              <p className="text-lg font-medium">Senior Frontend Engineer</p>
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
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav
      className={`transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-background/95 border-border fixed top-0 right-0 left-0 z-50 border-b shadow-lg backdrop-blur-sm"
          : "bg-background sticky top-0"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-4 md:flex">
        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
          data-aos="fade-right"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
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
            <p className="text-lg font-medium">Senior Frontend Engineer</p>
            <p className="text-sm text-gray-300">Consolation Lotachi Kem</p>
          </div>
        </Link>

        <div className="flex items-center gap-6" data-aos="fade-left">
          {navLinks.map((link) => {
            // If it's a hash link and we're not on home, prepend "/"
            const href =
              link.href.startsWith("#") && pathname !== "/"
                ? `/${link.href}`
                : link.href;

            return (
              <a
                key={link.href}
                href={href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-2 transition-colors duration-200"
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://github.com/KEM-CONSOLATION"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-accent rounded-md p-2 transition-colors duration-200"
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
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/20">
            <Image
              src="/Assets/Pic3.JPG"
              alt="Profile Picture"
              width={32}
              height={32}
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
            <span className="text-xs font-bold text-white">CK</span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="hover:bg-accent rounded-md p-2 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-foreground h-5 w-5" />
            ) : (
              <FaBars className="text-foreground h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="bg-background flex h-full flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="border-border flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
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
                  <p className="text-lg font-medium">Consolation Lotachi Kem</p>
                  <p className="text-muted-foreground text-sm">
                    Senior Frontend Engineer
                  </p>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="hover:bg-accent rounded-md p-2 transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <FaTimes className="text-foreground h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-1 flex-col justify-center space-y-4 px-4">
              {navLinks.map((link, index) => {
                // If it's a hash link and we're not on home, prepend "/"
                const href =
                  link.href.startsWith("#") && pathname !== "/"
                    ? `/${link.href}`
                    : link.href;

                return (
                  <a
                    key={link.href}
                    href={href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-foreground hover:text-primary bg-card hover:bg-accent border-border hover:border-primary/30 rounded-xl border px-6 py-4 text-2xl font-medium shadow-md transition-all duration-200 hover:shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="flex justify-center gap-6 pt-8">
                <a
                  href="https://github.com/KEM-CONSOLATION"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-accent border-border hover:border-primary/30 rounded-full border p-3 shadow-md transition-all duration-200 hover:shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <Image
                    src="/Assets/gitHubIcon.svg"
                    alt="GitHub Icon"
                    width={24}
                    height={24}
                    className="brightness-0 invert filter"
                  />
                </a>
                <a
                  href="https://ng.linkedin.com/in/kem-consolation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-accent border-border hover:border-primary/30 rounded-full border p-3 shadow-md transition-all duration-200 hover:shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Image
                    src="/Assets/link-square-02.svg"
                    alt="LinkedIn Icon"
                    width={24}
                    height={24}
                    className="brightness-0 invert filter"
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

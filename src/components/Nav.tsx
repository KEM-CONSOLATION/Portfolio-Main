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
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

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
    if (href.startsWith("#") && pathname !== "/") {
      e.preventDefault();
      router.push(`/${href}`);
      closeMobileMenu();
    } else if (href.startsWith("#")) {
      closeMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-gray-900 text-white">
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
    <>
      <nav
        className={`transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "bg-background border-border fixed top-0 right-0 left-0 z-[110] border-b"
            : isScrolled
              ? "bg-background/95 border-border fixed top-0 right-0 left-0 z-50 border-b shadow-lg backdrop-blur-sm"
              : "bg-background sticky top-0 z-50"
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

        {/* Mobile bar */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <Link
            href="/"
            onClick={closeMobileMenu}
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
            <div>
              <p className="text-foreground text-sm leading-tight font-semibold">
                Consolation Lotachi Kem
              </p>
              <p className="text-muted-foreground text-xs">
                Senior Frontend Engineer
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="hover:bg-accent rounded-md p-2 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-foreground h-5 w-5" />
              ) : (
                <FaBars className="text-foreground h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu (outside nav stacking context) */}
      {isMobileMenuOpen && (
        <div
          className="bg-background fixed inset-0 z-[100] flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="border-border flex items-center justify-between border-b px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
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
                <p className="text-foreground text-base font-semibold">
                  Consolation Lotachi Kem
                </p>
                <p className="text-muted-foreground text-sm">
                  Senior Frontend Engineer
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="hover:bg-accent rounded-md p-2 transition-colors"
              aria-label="Close mobile menu"
            >
              <FaTimes className="text-foreground h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-5 py-8">
            {navLinks.map((link) => {
              const href =
                link.href.startsWith("#") && pathname !== "/"
                  ? `/${link.href}`
                  : link.href;

              return (
                <a
                  key={link.href}
                  href={href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground hover:bg-accent active:bg-accent rounded-lg px-4 py-4 text-2xl font-semibold transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="border-border flex justify-center gap-4 border-t px-5 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <a
              href="https://github.com/KEM-CONSOLATION"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted hover:bg-accent flex h-12 w-12 items-center justify-center rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <Image
                src="/Assets/gitHubIcon.svg"
                alt="GitHub"
                width={22}
                height={22}
                className="brightness-0 invert filter"
              />
            </a>
            <a
              href="https://ng.linkedin.com/in/kem-consolation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted hover:bg-accent flex h-12 w-12 items-center justify-center rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Image
                src="/Assets/link-square-02.svg"
                alt="LinkedIn"
                width={22}
                height={22}
                className="brightness-0 invert filter"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;

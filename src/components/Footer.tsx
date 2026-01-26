"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/KEM-CONSOLATION",
      icon: FaGithub,
      label: "GitHub Profile",
    },
    {
      href: "https://ng.linkedin.com/in/kem-consolation",
      icon: FaLinkedin,
      label: "LinkedIn Profile",
    },
    {
      href: "https://www.youtube.com/@TechieConso",
      icon: FaYoutube,
      label: "YouTube Channel",
    },
    {
      href: "https://x.com/Techie_Conso",
      icon: FaTwitter,
      label: "Twitter Profile",
    },
  ];

  return (
    <footer className="border-border bg-card/50 border-t py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="border-primary/30 relative h-12 w-12 overflow-hidden rounded-full border-2">
                <Image
                  src="/Assets/Pic3.JPG"
                  alt="Consolation Lotachi Kem"
                  width={48}
                  height={48}
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-foreground text-xl font-bold">
                  Consolation Kem
                </h3>
                <p className="text-muted-foreground text-sm">
                  FrontEnd Engineer
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Building modern, efficient, and user-centric web applications with
              React, Next.js, and TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground mb-4 text-lg font-semibold">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Skills
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-foreground mb-4 text-lg font-semibold">
              Connect
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-accent border-border hover:border-primary/30 rounded-lg border p-3 transition-all duration-200 hover:shadow-lg"
                    aria-label={link.label}
                  >
                    <Icon className="text-muted-foreground hover:text-primary h-5 w-5 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-center text-sm md:text-left">
            &copy; {currentYear} Consolation Lotachi Kem. All rights reserved.
          </p>
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            Created with ❤️ by{" "}
            <a
              href="https://github.com/KEM-CONSOLATION"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              TechieConso
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

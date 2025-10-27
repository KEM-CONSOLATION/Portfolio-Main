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
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
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
                <h3 className="text-xl font-bold text-foreground">Consolation Kem</h3>
                <p className="text-sm text-muted-foreground">FrontEnd Engineer</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Building modern, efficient, and user-centric web applications with React, Next.js, and TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
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
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card hover:bg-accent border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-lg"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} Consolation Lotachi Kem. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Created with ❤️ by{" "}
            <a
              href="https://github.com/KEM-CONSOLATION"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
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


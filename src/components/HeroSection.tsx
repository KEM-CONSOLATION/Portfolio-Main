"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Modal from "./Modal";

const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const socialLinks = [
    { href: "https://ng.linkedin.com/in/kem-consolation", label: "LinkedIn" },
    { href: "https://www.youtube.com/@TechieConso", label: "YouTube" },
    { href: "https://x.com/Techie_Conso/", label: "Twitter" },
    { href: "https://www.instagram.com/techie_conso/", label: "Instagram" },
  ];

  return (
    <section
      className="flex min-h-screen flex-col justify-center py-20"
      id="home"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Profile Image */}
          <div
            className="order-2 flex justify-center lg:order-1 lg:justify-start"
            data-aos="fade-right"
          >
            <div className="group relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl lg:h-96 lg:w-96">
                <Image
                  src="/Assets/Pic1.JPG"
                  alt="Consolation Lotachi Kem - Software Engineer"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="order-1 space-y-6 text-center lg:order-2 lg:text-left"
            data-aos="fade-left"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground text-xl font-medium lg:text-2xl">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl leading-tight font-bold lg:text-6xl xl:text-7xl">
                <span className="text-foreground">Consolation</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Lotachi Kem
                </span>
              </h1>
              <h2 className="text-muted-foreground text-2xl font-semibold lg:text-3xl">
                Software Engineer
              </h2>
            </div>

            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed lg:mx-0 lg:text-lg">
              With over 4 years of industry experience specializing in building
              functional web applications by crafting efficient, maintainable,
              and testable client code. Collaborative and solution-driven,
              proficient in JavaScript, React.js, Next.js, and TypeScript with
              hands-on experience in API integration. I excel in translating
              design mockups into user-centric applications.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="group inline-flex transform cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-emerald-700 hover:shadow-xl"
                data-aos="zoom-in"
              >
                <span>View My Resume</span>
                <FaExternalLinkAlt className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </button>

              <a
                href="#projects"
                className="border-border text-foreground hover:bg-accent inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 font-semibold transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transform text-lg font-medium transition-colors duration-300 hover:scale-110"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <Modal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)}>
        <iframe
          src="https://drive.google.com/file/d/136GAlJZjlG9M-65oZ0lYXZns34H6S-1b/preview"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Resume"
          className="h-full w-full"
        />
      </Modal>
    </section>
  );
};

export default HeroSection;

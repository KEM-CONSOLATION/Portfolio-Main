"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const socialLinks = [
    { href: "https://ng.linkedin.com/in/kem-consolation", label: "LinkedIn" },
    { href: "https://www.youtube.com/@TechieConso", label: "YouTube" },
    { href: "https://x.com/Techie_Conso/", label: "Twitter" },
    { href: "https://www.instagram.com/techie_conso/", label: "Instagram" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center py-20" id="home">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/Assets/Pic1.JPG"
                  alt="Consolation Lotachi Kem - FrontEnd Engineer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6" data-aos="fade-left">
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl font-medium text-muted-foreground">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Consolation</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Lotachi Kem
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                FrontEnd Engineer
              </h2>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              With over 4 years of industry experience specializing in building
              functional web applications by crafting efficient, maintainable, and
              testable client code. Collaborative and solution-driven, proficient
              in JavaScript, React.js, Next.js, and TypeScript with hands-on
              experience in API integration. I excel in translating design mockups
              into user-centric applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/14mVGjl4oewshZzNti4FtC_b8V2Jwhidh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-aos="zoom-in"
              >
                <span>View My Resume</span>
                <Image
                  src="/Assets/link-square-02.svg"
                  alt="Resume Link"
                  width={20}
                  height={20}
                  className="group-hover:rotate-45 transition-transform duration-300"
                />
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-8" data-aos="fade-up" data-aos-delay="200">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium text-lg hover:scale-110 transform"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

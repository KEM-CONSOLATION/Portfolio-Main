"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isScrolled ? "pb-[70px]" : ""}>
      <div
        className={`
    hidden md:flex items-start justify-between
    transition-all duration-500 ease-in-out
    ${
      isScrolled
        ? "fixed top-0 left-0 right-0 bg-[#0a0a0a] shadow-lg border-b z-50 py-3"
        : "sticky top-0 bg-[#0a0a0a]"
    }
  `}
        data-aos={isScrolled ? "fade-down" : "fade-down"}
      >
        <div className="flex items-center gap-[16px]">
          <div className="overflow-hidden max-h-[52px] max-w-[52px] rounded-full bg-[#48484A] border-2 border-white">
            <Image
              src="/Assets/Pic3.JPG"
              alt="Profile Picture"
              width={52}
              height={52}
              className="rounded-full object-cover"
              loading="lazy"
              priority={false}
            />
          </div>
          <div className="space-y-[8px]">
            <p className="font-[500] text-[18px] md:text-[20px]">
              FrontEnd Engineer
            </p>
            <p className="font-[400] text-[14px] md:text-[16px]">
              Consolation Lotachi Kem
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-[16px] text-[16px] font-[500]"
          data-aos="fade-left"
        >
          <a href="#home" className="p-[8px]">
            Home
          </a>
          <a href="#experience" className="p-[8px]">
            Experience
          </a>
          <a href="#projects" className="p-[8px]">
            Projects
          </a>
          <a
            href="https://github.com/KEM-CONSOLATION"
            target="_blank"
            className="p-[8px]"
          >
            <Image
              src="/Assets/gitHubIcon.svg"
              alt="GitHub Icon"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>

      {!isScrolled && (
        <div
          className="md:hidden fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          bg-[#0a0a0a] border-b border-gray-200
          py-[12px] px-[16px]"
          data-aos="fade-down"
        >
          <p className="text-white font-[500] text-[16px]">
            Consolation Lotachi Kem
          </p>
          <a href="https://github.com/KEM-CONSOLATION" target="_blank">
            <Image
              src="/Assets/gitHubIcon.svg"
              alt="GitHub Icon"
              width={28}
              height={28}
            />
          </a>
        </div>
      )}

      {isScrolled && (
        <div
          className="
          flex items-center justify-between
          bg-[#0a0a0a] border-t border-gray-200
          py-[12px] px-[16px]"
          data-aos="fade-up"
        >
          <p className="text-white font-[500] text-[16px]">
            Consolation Lotachi Kem
          </p>
          <a href="https://github.com/KEM-CONSOLATION" target="_blank">
            <Image
              src="/Assets/gitHubIcon.svg"
              alt="GitHub Icon"
              width={28}
              height={28}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;

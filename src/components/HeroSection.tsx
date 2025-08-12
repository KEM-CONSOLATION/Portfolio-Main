"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="mb-10 overflow-hidden" id="home">
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12">
        <div className="flex-shrink-0 mx-auto md:mx-0" data-aos="fade-right">
          <div
            className="
              max-h-[350px] max-w-[350px] 
              border-4 border-[#1e1e1e] shadow-lg overflow-hidden
              rounded-none md:rounded-full
              bg-gradient-to-r from-blue-500 to-purple-500
            "
          >
            <Image
              src="/Assets/Pic2.JPG"
              alt="Profile Picture - Mobile"
              width={350}
              height={350}
              loading="lazy"
              priority={false}
              className="object-cover w-full h-full block md:hidden"
            />

            <Image
              src="/Assets/Pic1.JPG"
              alt="Profile Picture - Desktop"
              width={350}
              height={350}
              loading="lazy"
              priority={false}
              className="object-cover w-full h-full hidden md:block"
            />
          </div>
        </div>

        <div
          className="max-w-[700px] text-center md:text-left space-y-4"
          data-aos="fade-left"
        >
          <p className="font-medium text-[20px] md:text-[24px]">
            I&apos;m Consolation Lotachi Kem
          </p>
          <h1 className="font-bold text-[36px] md:text-[56px] leading-tight">
            Snr. Frontend Developer
          </h1>
          <p className="font-normal text-[14px] md:text-[16px] text-justify md:text-left ">
            I craft high-performing, scalable, and visually engaging web
            applications that align with business objectives. With extensive
            expertise in modern JavaScript frameworks, UX/UI best practices, and
            product strategy, I ensure every interface delivers measurable
            value. I lead cross-functional collaboration using tools like Jira,
            Microsoft Suite, Figma, and Google Workspace — driving efficiency,
            innovation, and exceptional user experiences from concept to
            deployment.
          </p>
          <div
            className="p-[10px] rounded-[8px]  bg-[#48484A] dark:bg-[#FFFFFF] inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            data-aos="zoom-in"
          >
            <p className="font-[500] text-[16px] text-[#ffffff] dark:text-[#48484A]">
              View My Resume
            </p>
            <Image
              src="/Assets/link-square-02.svg"
              alt="Resume Link"
              width={24}
              height={24}
            />
          </div>
        </div>
      </section>

      <div
        className="max-w-[600px] mx-auto flex flex-wrap items-center justify-between"
        data-aos="fade-up"
      >
        <p className="font-[500] text-[16px]">
          <a href="https://ng.linkedin.com/in/kem-consolation"> LinkedIn</a>
        </p>
        <p className="font-[500] text-[16px]">
          <a href="https://www.youtube.com/@TechieConso" target="_blank">
            Youtube
          </a>
        </p>
        <p className="font-[500] text-[16px]">
          <a href="https://x.com/Techie_Conso/" target="_blank">
            Twitter
          </a>
        </p>
        <p className="font-[500] text-[16px]">
          <a href="https://www.instagram.com/techie_conso/" target="_blank">
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

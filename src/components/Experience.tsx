"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    role: "Lead Frontend Engineer | Beyond Tech, Calabar, Nigeria",
    period: "January 2025 – Present (Remote, Contract)",
    details: [
      "Leading the frontend development of Work&Shop, a platform connecting skilled professionals, vendors, and customers.",
      "Architecting and implementing scalable React and Next.js solutions to enhance performance and maintainability.",
      "Collaborating with product managers, designers, and backend engineers to deliver seamless user experiences.",
      "Conducting code reviews, mentoring junior developers, and enforcing best practices in UI/UX and accessibility.",
      "Optimizing frontend build processes, improving load times, and ensuring cross-browser compatibility.",
    ],
  },
  {
    role: "Senior Frontend Developer | Digital Nexus, Lagos, Nigeria",
    period: "May 2022 – Dec 2024 (Hybrid)",
    details: [
      "Led frontend architecture for enterprise SaaS applications serving 10k+ daily users.",
      "Implemented design systems with Tailwind CSS and React for consistent UI/UX.",
      "Optimized performance, reducing page load times by 45%.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    role: "Frontend Developer | WebFlow Studios, Remote",
    period: "Jan 2020 – Apr 2022 (Remote)",
    details: [
      "Built responsive marketing websites for clients across finance, health, and e-commerce.",
      "Integrated APIs and CMS systems for dynamic content management.",
      "Collaborated closely with UI/UX designers to refine prototypes.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="mb-[100px]" id="experience">
      <div className="space-y-[8px]" data-aos="fade-up">
        <p className="font-[500] text-[35px] md:text-[40px]">Experience</p>
        <p className="font-[500] text-[15px] md:text-[20px]">
          Navigating my professional journey, one role at a time
        </p>
      </div>

      <div className="mt-[32px] space-y-[16px]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#48484A] rounded-[8px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center py-[16px] px-[16px] border-b border-[#D9D9D9] focus:outline-none cursor-pointer"
            >
              <div>
                <p className="font-[700] text-[16px] md:text-[18px] text-left">
                  {exp.role}
                </p>
                <p className="font-[400] text-[12px] md:text-[14px]">
                  {exp.period}
                </p>
              </div>
              {openIndex === index ? (
                <FaChevronUp className="text-white text-[18px]" />
              ) : (
                <FaChevronDown className="text-white text-[18px]" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <div className="py-[16px] px-[16px] text-[14px] md:text-[16px] font-[400] space-y-[8px]">
                {exp.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

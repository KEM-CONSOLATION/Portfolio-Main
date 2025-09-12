"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    role: "Lead Frontend Engineer",
    company: "Beyond Tech",
    location: "Calabar, Nigeria",
    period: "January 2025 – Present",
    type: "Remote, Contract",
    details: [
      "Leading the frontend development of Work&Shop, a platform connecting skilled professionals, vendors, and customers.",
      "Architecting and implementing scalable React and Next.js solutions to enhance performance and maintainability.",
      "Collaborating with product managers, designers, and backend engineers to deliver seamless user experiences.",
      "Conducting code reviews, mentoring junior developers, and enforcing best practices in UI/UX and accessibility.",
      "Optimizing frontend build processes, improving load times, and ensuring cross-browser compatibility.",
    ],
  },
  {
    role: "FrontEnd Engineer",
    company: "Digital Nexus",
    location: "Lagos, Nigeria",
    period: "May 2022 – Dec 2024",
    type: "Hybrid",
    details: [
      "Led frontend architecture for enterprise SaaS applications serving 10k+ daily users.",
      "Implemented design systems with Tailwind CSS and React for consistent UI/UX.",
      "Optimized performance, reducing page load times by 45%.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    role: "FrontEnd Engineer",
    company: "WebFlow Studios",
    location: "Remote",
    period: "Jan 2020 – Apr 2022",
    type: "Remote",
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
    <section className="py-20" id="experience">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Navigating my professional journey, one role at a time
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`experience-${index}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-3">
                      <span className="font-semibold text-blue-400">{exp.company}</span>
                      <div className="flex items-center gap-1 text-sm">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                      {exp.type}
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <FaChevronUp className="text-white text-lg" />
                    ) : (
                      <FaChevronDown className="text-white text-lg" />
                    )}
                  </div>
                </div>
              </button>

              <div
                id={`experience-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-6 pb-6 border-t border-white/10">
                  <ul className="space-y-3 pt-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm lg:text-base leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

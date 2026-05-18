"use client";

import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

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
    role: "Frontend Engineer",
    company: "Passion Tree Care Services Ltd",
    location: "Chelmsford, England, UK",
    period: "January 2025 – Present",
    type: "Remote",
    details: [
      "Developed and maintained a healthcare management platform serving care providers across Reablement and Home-to-Assess programs.",
      "Built complex multi-step workflows using React Hook Form and Zod, reducing data entry errors by 40%.",
      "Implemented automated transfer systems with conditional workflows and managerial approval processes for 500+ users.",
      "Integrated REST APIs and real-time synchronization systems to improve operational efficiency and data accuracy.",
      "Optimized frontend performance using Zustand, memoization, and scalable state management patterns.",
      "Built responsive and accessible interfaces using Tailwind CSS with high mobile compatibility.",
    ],
  },
  {
    role: "Lead Frontend Engineer",
    company: "Beyond Tech",
    location: "Remote",
    period: "January 2025 – June 2025",
    type: "Contract",
    details: [
      "Led frontend architecture and development for Work&Shop, a marketplace platform connecting professionals, vendors, and customers.",
      "Designed scalable React and Next.js applications focused on maintainability and performance.",
      "Collaborated with designers, backend engineers, and stakeholders to deliver seamless user experiences.",
      "Conducted code reviews, mentored junior developers, and enforced frontend best practices and accessibility standards.",
      "Improved application performance, load times, and cross-browser compatibility.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "ScriptDesk Technologies",
    location: "Remote",
    period: "April 2024 – February 2025",
    type: "Remote",
    details: [
      "Built responsive web applications from Figma designs using React and Next.js.",
      "Integrated REST APIs and developed interactive dashboards for business clients.",
      "Improved mobile performance and user engagement through optimized frontend architecture.",
      "Delivered scalable UI solutions aligned with modern frontend standards.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "TrooHQ Technologies",
    location: "Remote",
    period: "January 2024 – May 2025",
    type: "Remote",
    details: [
      "Developed cloud-based restaurant management software for African food businesses.",
      "Built reusable React components that improved operational efficiency by 25% for 100+ users.",
      "Transformed Figma designs into responsive applications with REST API integrations and improved mobile UX.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20" id="experience">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-foreground mb-4 text-4xl font-bold lg:text-5xl">
            Professional Experience
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            5+ years building scalable web products for startups and
            international clients
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border-border hover:bg-accent overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full p-6 text-left focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`experience-${index}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-card-foreground mb-2 text-xl font-bold lg:text-2xl">
                      {exp.role}
                    </h3>
                    <div className="text-muted-foreground mb-3 flex flex-wrap items-center gap-4">
                      <span className="text-primary font-semibold">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-1 text-sm">
                        <FaMapMarkerAlt className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <FaCalendarAlt className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <span className="bg-primary/20 text-primary border-primary/30 inline-block rounded-full border px-3 py-1 text-sm">
                      {exp.type}
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <FaChevronUp className="text-card-foreground text-lg" />
                    ) : (
                      <FaChevronDown className="text-card-foreground text-lg" />
                    )}
                  </div>
                </div>
              </button>

              <div
                id={`experience-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <div className="border-border border-t px-6 pb-6">
                  <ul className="space-y-3 pt-4">
                    {exp.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-3"
                      >
                        <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
                        <span className="text-sm leading-relaxed lg:text-base">
                          {detail}
                        </span>
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

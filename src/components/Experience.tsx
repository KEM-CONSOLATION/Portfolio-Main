"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

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
    location: "Chelmsford, England, United Kingdom",
    period: "January 2025 – Present",
    type: "Remote, Contract",
    details: [
      "Developed and maintained a comprehensive healthcare management platform for care providers, enabling seamless service user management, scheduling, and service transfers across multiple healthcare services including Reablement and Home-to-Assess programs.",
      "Built complex multi-step forms with real-time validation, dynamic field rendering, and seamless data persistence using React Hook Form and Zod schema validation.",
      "Implemented service transfer workflows with conditional logic, manager credential verification, and automatic service ending upon successful transfers.",
      "Developed address lookup functionality integrating with external postcode APIs, implementing debounced search, district validation, and automatic address pre-population.",
      "Created reusable UI components including custom date/time pickers, file upload systems, schedule modals, and form drawers using React and TypeScript.",
      "Integrated multiple REST APIs for user management, service records, document uploads, and real-time data synchronization across different healthcare services.",
      "Implemented state management using Zustand stores for complex form states, API responses, and user session management.",
      "Built responsive interfaces with mobile-optimized layouts, custom animations, and accessibility features using Tailwind CSS.",
      "Optimized form performance with lazy loading, memoization, and efficient re-rendering strategies for large datasets.",
    ],
  },
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
    company: "TrooHQ Technologies",
    location: "Remote",
    period: "January 2024 – May 2025",
    type: "Remote",
    details: [
      "Developed high-performance, reusable code and features for managing staff, menus, and orders in a restaurant management system.",
      "Converted Figma designs into responsive websites, integrated with REST APIs, and optimized the application for mobile with custom animations for enhanced user experience.",
      "Transformed restaurant operations through intuitive, cloud-based software solutions empowering restaurants of all types across Africa.",
      "Enhanced customer experience and boosted profitability by simplifying operations for food trucks, lounges, quick-service chains, hotels, and fine-dining establishments.",
    ],
  },
  {
    role: "FrontEnd Engineer",
    company: "ScriptDesk Technologies",
    location: "Remote",
    period: "April 2024 – February 2025",
    type: "Remote",
    details: [
      "Transformed Figma designs into fully functional, responsive websites and integrated frontend designs with REST APIs to connect the UI with backend data.",
      "Led the development of interactive dashboards and mobile-first optimized websites, enhancing user experience and client engagement.",
      "Stayed ahead of the curve by leveraging the latest technologies to ensure businesses remain competitive and relevant in the evolving digital landscape.",
      "Developed solutions that help businesses adapt to constantly changing digital requirements.",
    ],
  },
  {
    role: "FrontEnd Engineer",
    company: "Alpha-Version",
    location: "Remote",
    period: "December 2023 – December 2024",
    type: "Remote",
    details: [
      "Developed and launched the company's real estate platform website, enabling landlords to list properties and providing tenants with seamless property search functionality.",
      "Integrated APIs for real-time data exchange, optimized front-end components for performance, and enhanced user experience with custom animations and mobile optimization.",
      "Built a comprehensive platform for buying, selling, leasing, and renting apartments with intuitive user interfaces.",
      "Implemented responsive design principles ensuring optimal performance across all devices and screen sizes.",
    ],
  },
  {
    role: "FrontEnd Engineer",
    company: "CityXplorer",
    location: "Tennessee, USA",
    period: "March 2023 – December 2023",
    type: "Remote",
    details: [
      "Integrated APIs to enable merchants to create stores and sell products, ensuring seamless functionality and smooth user interaction.",
      "Developed and optimized high-performance web applications with reusable front-end components, custom animations, and mobile optimization.",
      "Built an e-commerce platform designed to empower merchants to create online stores and sell products seamlessly.",
      "Created a dynamic and user-friendly marketplace with features for suggesting stores and interacting with merchants, emphasizing efficiency, responsiveness, and accessibility across devices.",
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigating my professional journey, one role at a time
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:bg-accent transition-all duration-300"
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
                    <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                      <span className="font-semibold text-primary">{exp.company}</span>
                      <div className="flex items-center gap-1 text-sm">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <FaCalendarAlt className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
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
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-6 pb-6 border-t border-border">
                  <ul className="space-y-3 pt-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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

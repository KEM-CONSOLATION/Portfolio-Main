"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js / Next.js",
        "TypeScript & JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices"
      ]
    },
    {
      title: "State Management & APIs",
      skills: [
        "Redux & Redux Toolkit",
        "Zustand & Context API",
        "RESTful APIs",
        "GraphQL Integration",
        "React Query / SWR",
        "Axios & Fetch API"
      ]
    },
    {
      title: "Styling & UI/UX",
      skills: [
        "Tailwind CSS",
        "Material-UI (MUI)",
        "ShadCN/UI",
        "Styled Components",
        "CSS Modules",
        "Figma to Code"
      ]
    },
    {
      title: "Testing & Tools",
      skills: [
        "Jest & React Testing Library",
        "Cypress & Playwright",
        "Git & GitHub",
        "Webpack & Vite",
        "ESLint & Prettier",
        "Docker & CI/CD"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Developer Student Clubs Lead",
      issuer: "Google Developer Student Clubs",
      year: "2022"
    },
    {
      name: "Google Developer Student Clubs Core Team Member",
      issuer: "Google Developer Student Clubs",
      year: "2021"
    },
    {
      name: "GDSC Commendation Letter",
      issuer: "Google Developer Student Clubs",
      year: "2022"
    }
  ];

  return (
    <section className="py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my diverse skill set, a testament to my commitment to
            delivering excellence in frontend engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-accent transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <h3 className="text-xl font-bold text-card-foreground mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-accent transition-colors duration-200"
                    data-aos="zoom-in"
                    data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                  >
                    <Image
                      src="/Assets/checkmark.svg"
                      alt="Checkmark"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                    />
                    <span className="text-muted-foreground text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-muted hover:bg-accent transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/Assets/checkmark.svg"
                    alt="Certificate"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-card-foreground font-semibold mb-1">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-primary text-sm font-medium">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

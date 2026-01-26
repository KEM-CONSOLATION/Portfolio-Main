"use client";

import Image from "next/image";
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js / Next.js",
        "TypeScript & JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices",
      ],
    },
    {
      title: "State Management & APIs",
      skills: [
        "Redux & Redux Toolkit",
        "Zustand & Context API",
        "RESTful APIs",
        "GraphQL Integration",
        "React Query / SWR",
        "Axios & Fetch API",
      ],
    },
    {
      title: "Styling & UI/UX",
      skills: [
        "Tailwind CSS",
        "Material-UI (MUI)",
        "ShadCN/UI",
        "Styled Components",
        "CSS Modules",
        "Figma to Code",
      ],
    },
    {
      title: "Testing & Tools",
      skills: [
        "Jest & React Testing Library",
        "Cypress & Playwright",
        "Git & GitHub",
        "Webpack & Vite",
        "ESLint & Prettier",
        "Docker & CI/CD",
      ],
    },
  ];

  const certifications = [
    {
      name: "Google Developer Student Clubs Lead",
      issuer: "Google Developer Student Clubs",
      year: "2022",
    },
    {
      name: "Google Developer Student Clubs Core Team Member",
      issuer: "Google Developer Student Clubs",
      year: "2021",
    },
    {
      name: "GDSC Commendation Letter",
      issuer: "Google Developer Student Clubs",
      year: "2022",
    },
  ];

  return (
    <section className="py-20" id="skills">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-foreground mb-4 text-4xl font-bold lg:text-5xl">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Explore my diverse skill set, a testament to my commitment to
            delivering excellence in frontend engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card border-border hover:bg-accent rounded-xl border p-6 backdrop-blur-sm transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <h3 className="text-card-foreground mb-6 flex items-center gap-3 text-xl font-bold">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-muted hover:bg-accent flex items-center gap-3 rounded-lg p-3 transition-colors duration-200"
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
                    <span className="text-muted-foreground text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className="bg-card border-border rounded-xl border p-8 backdrop-blur-sm"
          data-aos="fade-up"
        >
          <h3 className="text-card-foreground mb-8 text-center text-2xl font-bold">
            Professional Certifications
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-muted hover:bg-accent group flex items-start gap-4 rounded-lg p-4 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/Assets/checkmark.svg"
                    alt="Certificate"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-card-foreground mb-1 font-semibold">
                    {cert.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-primary text-sm font-medium">
                    {cert.year}
                  </p>
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

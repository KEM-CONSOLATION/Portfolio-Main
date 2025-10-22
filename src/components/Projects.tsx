"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

interface Project {
  name: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  reverse: boolean;
}

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const projects: Project[] = [
    {
      name: "Troo",
      role: "Lead Frontend Engineer",
      description:
        "Troo is a comprehensive Restaurant Management Software tailored to elevate the operations of hospitality businesses. With a suite of integrated tools, Troo helps businesses enhance efficiency, improve customer experience, and ultimately boost profitability. Designed with ease of use in mind, the software is built to seamlessly manage front-of-house and kitchen operations while simplifying payment processing and customer interactions.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      image: "/Assets/troo.png",
      link: "#",
      github: "#",
      reverse: false,
    },
    {
      name: "Kurenode",
      role: "Lead Frontend Engineer",
      description:
        "Kurenode is a health insurance software application aimed at enhancing healthcare delivery for patients and operational efficiency for healthcare providers. Kurenode focuses on integrating patient records, automating administrative tasks, and optimizing revenue management. The application seeks to improve patient care, streamline healthcare processes, ensure compliance with regulations, and reduce costs.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux"],
      image: "/Assets/kurnode.png",
      link: "#",
      github: "#",
      reverse: true,
    },
    {
      name: "Growth Group DC Website",
      role: "Frontend Engineer",
      description:
        "A comprehensive church management platform built with Next.js and Sanity CMS. Features include event management, blog system, audio messages, weekly reports, and department management. The platform serves as a digital hub for church members with real-time content updates, member engagement tools, and administrative dashboards.",
      tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Radix UI", "AOS"],
      image: "/Assets/troo.png",
      link: "#",
      github: "#",
      reverse: false,
    },
    {
      name: "Ecomarine",
      role: "Frontend Engineer",
      description:
        "A modern maritime services website for Ecomarine, featuring comprehensive information about container services, terminal operations, and shipping solutions. Built with Next.js and includes features like blog management, career listings, FAQ system, and responsive design optimized for the maritime industry.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query", "Zustand"],
      image: "/Assets/kurnode.png",
      link: "#",
      github: "#",
      reverse: true,
    },
    {
      name: "MagicGames",
      role: "Frontend Engineer",
      description:
        "A gaming platform built with Next.js featuring user authentication, game management, campaign systems, and dashboard functionality. The platform includes phone verification, OTP authentication, subscription management, and a comprehensive gaming experience with real-time updates and user engagement features.",
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "React Query", "Zustand", "Zod"],
      image: "/Assets/troo.png",
      link: "#",
      github: "#",
      reverse: false,
    },
    {
      name: "Premium & Classy",
      role: "Frontend Engineer",
      description:
        "A professional event planning website built with Next.js and Sanity CMS. Features include portfolio showcase, service management, client testimonials, booking system, and contact forms. The website serves as a digital business card for event planners with integrated email services and responsive design.",
      tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion", "EmailJS"],
      image: "/Assets/kurnode.png",
      link: "#",
      github: "#",
      reverse: true,
    },
  ];

  return (
    <section className="py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of the projects I have worked on
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                project.reverse ? "lg:grid-flow-col-dense" : ""
              }`}
              data-aos={project.reverse ? "fade-left" : "fade-right"}
            >
              {/* Project Image */}
              <div 
                className={`${project.reverse ? "lg:col-start-2" : ""}`}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <Image
                      src={project.image}
                      alt={`${project.name} Project Screenshot`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div 
                className={`space-y-6 ${project.reverse ? "lg:col-start-1" : ""}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="space-y-4">
                  <div className=" gap-y-3">
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                      {project.name}
                    </h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4" data-aos="zoom-in" data-aos-delay="150">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>Live Demo</span>
                    <Image
                      src="/Assets/link-square-02.svg"
                      alt="External Link"
                      width={16}
                      height={16}
                      className="group-hover:rotate-45 transition-transform duration-300"
                    />
                  </a>
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-all duration-300"
                    >
                      <Image
                        src="/Assets/gitHubIcon.svg"
                        alt="GitHub"
                        width={20}
                        height={20}
                      />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="lg:hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((project, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-6 space-y-6">
                    {/* Project Image */}
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative rounded-xl overflow-hidden shadow-xl border border-border">
                        <Image
                          src={project.image}
                          alt={`${project.name} Project Screenshot`}
                          width={400}
                          height={250}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.name}
                        </h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                          {project.role}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-base font-semibold text-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-md text-xs font-medium border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                      >
                        <span>Live Demo</span>
                        <Image
                          src="/Assets/link-square-02.svg"
                          alt="External Link"
                          width={14}
                          height={14}
                          className="group-hover:rotate-45 transition-transform duration-300"
                        />
                      </a>
                      
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-all duration-300 text-sm"
                        >
                          <Image
                            src="/Assets/gitHubIcon.svg"
                            alt="GitHub"
                            width={16}
                            height={16}
                          />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

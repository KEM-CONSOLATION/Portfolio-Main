"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import Link from "next/link";
import { projects } from "@/data/projects";

const ProjectsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

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

  // Show only first 6 projects in carousel
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="py-20" id="projects">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-foreground mb-4 text-4xl font-bold lg:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Explore some of the projects I have worked on
          </p>
        </div>

        {/* Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {featuredProjects.map((project, index) => (
              <div
                key={project.name}
                className="embla__slide min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] md:flex-[0_0_calc(33.333%-0.67rem)] lg:flex-[0_0_calc(33.333%-0.67rem)]"
              >
                <div className="bg-card border-border h-full space-y-3 rounded-lg border p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                  {/* Project Image */}
                  <div className="group relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-50 blur transition duration-500 group-hover:opacity-75"></div>
                    <div className="border-border relative overflow-hidden rounded-lg border shadow-md">
                      <Image
                        key={project.image}
                        src={project.image}
                        alt={`${project.name} Project Screenshot`}
                        width={300}
                        height={180}
                        className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-2">
                    <div className="space-y-1.5">
                      <h3 className="text-foreground line-clamp-1 text-lg font-bold">
                        {project.name}
                      </h3>
                      <span className="bg-primary/20 text-primary border-primary/30 inline-block rounded-full border px-2 py-0.5 text-xs">
                        {project.role}
                      </span>
                    </div>

                    <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-foreground text-xs font-semibold">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="rounded border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="rounded border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-medium text-gray-300">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full transform items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-blue-600 to-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-emerald-700 hover:shadow-lg"
                    >
                      <span>View Project</span>
                      <Image
                        src="/Assets/link-square-02.svg"
                        alt="External Link"
                        width={12}
                        height={12}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <Link
            href="/portfolio"
            className="group inline-flex transform items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-emerald-700 hover:shadow-xl"
          >
            <span>View All Projects</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;

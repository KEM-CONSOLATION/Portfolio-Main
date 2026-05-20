"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

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

        <div className="relative">
          {/* Previous / Next */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous projects"
            className="border-border bg-card/90 text-foreground hover:bg-accent absolute top-1/2 left-1 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all disabled:pointer-events-none disabled:opacity-30 sm:-left-4 sm:left-0 sm:h-11 sm:w-11 md:-left-6"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next projects"
            className="border-border bg-card/90 text-foreground hover:bg-accent absolute top-1/2 right-1 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all disabled:pointer-events-none disabled:opacity-30 sm:-right-4 sm:right-0 sm:h-11 sm:w-11 md:-right-6"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>

          {/* Carousel */}
          <div className="embla overflow-hidden sm:px-12" ref={emblaRef}>
            <div className="embla__container flex gap-0 sm:gap-4">
              {featuredProjects.map((project) => (
                <div
                  key={project.name}
                  className="embla__slide min-w-0 flex-[0_0_100%] sm:flex-[0_0_48%] md:flex-[0_0_calc(33.333%-0.67rem)] lg:flex-[0_0_calc(33.333%-0.67rem)]"
                >
                  <div className="bg-card border-border h-full space-y-3 rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg sm:rounded-lg">
                    <div className="group relative">
                      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-50 blur transition duration-500 group-hover:opacity-75"></div>
                      <div className="border-border relative overflow-hidden rounded-lg border shadow-md">
                        <Image
                          key={project.image}
                          src={project.image}
                          alt={`${project.name} Project Screenshot`}
                          width={300}
                          height={180}
                          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-32"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="space-y-1.5">
                        <h3 className="text-foreground line-clamp-2 text-xl font-bold sm:line-clamp-1 sm:text-lg">
                          {project.name}
                        </h3>
                        <span className="bg-primary/20 text-primary border-primary/30 inline-block rounded-full border px-2 py-0.5 text-xs">
                          {project.role}
                        </span>
                      </div>

                      <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed sm:line-clamp-2 sm:text-xs">
                        {project.description}
                      </p>
                    </div>

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
        </div>

        {/* Carousel Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-6 scale-100"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
            />
          ))}
        </div>

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

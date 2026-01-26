"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { projects } from "@/data/projects";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
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

  return (
    <section className="py-20" id="projects">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-foreground mb-4 text-4xl font-bold lg:text-5xl">
            All Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Explore all the projects I have worked on
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden space-y-24 lg:block">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
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
                <div className="group relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-75 blur transition duration-1000 group-hover:opacity-100"></div>
                  <div className="border-border relative overflow-hidden rounded-2xl border shadow-2xl">
                    <Image
                      src={project.image}
                      alt={`${project.name} Project Screenshot`}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
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
                  <div className="gap-y-3">
                    <h3 className="text-foreground text-3xl font-bold lg:text-4xl">
                      {project.name}
                    </h3>
                    <span className="bg-primary/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-sm">
                      {project.role}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:bg-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className="flex flex-col gap-4 sm:flex-row"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex transform items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-emerald-700 hover:shadow-xl"
                  >
                    <span>Live Demo</span>
                    <Image
                      src="/Assets/link-square-02.svg"
                      alt="External Link"
                      width={16}
                      height={16}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border text-foreground hover:bg-accent inline-flex items-center justify-center gap-3 rounded-lg border-2 px-6 py-3 font-semibold transition-all duration-300"
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
                <div
                  key={index}
                  className="embla__slide min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="bg-card border-border space-y-6 rounded-xl border p-6 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="group relative">
                      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-emerald-500/20 opacity-75 blur transition duration-1000 group-hover:opacity-100"></div>
                      <div className="border-border relative overflow-hidden rounded-xl border shadow-xl">
                        <Image
                          src={project.image}
                          alt={`${project.name} Project Screenshot`}
                          width={400}
                          height={250}
                          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-foreground text-2xl font-bold">
                          {project.name}
                        </h3>
                        <span className="bg-primary/20 text-primary border-primary/30 rounded-full border px-3 py-1 text-sm">
                          {project.role}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-foreground text-base font-semibold">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-gray-300"
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
                        className="group inline-flex transform items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-emerald-700 hover:shadow-xl"
                      >
                        <span>Live Demo</span>
                        <Image
                          src="/Assets/link-square-02.svg"
                          alt="External Link"
                          width={14}
                          height={14}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />
                      </a>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-border text-foreground hover:bg-accent inline-flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;

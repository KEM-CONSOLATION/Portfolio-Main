import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const projects = [
    {
      name: "Troo",
      role: "Lead Frontend Engineer",
      description:
        "Troo is a comprehensive Restaurant Management Software tailored to elevate the operations of hospitality businesses. With a suite of integrated tools, Troo helps businesses enhance efficiency, improve customer experience, and ultimately boost profitability. Designed with ease of use in mind, the software is built to seamlessly manage front-of-house and kitchen operations while simplifying payment processing and customer interactions.",
      tech: ["Next Js", "Typescript", "Tailwindcss", "Redux"],
      image: "/Assets/troo.png",
      link: "#",
      reverse: false,
    },
    {
      name: "Kurenode",
      role: "Lead Frontend Engineer",
      description:
        "Kurenode is a health insurance software application aimed at enhancing healthcare delivery for patients and operational efficiency for healthcare providers. Kurenode focuses on integrating patient records, automating administrative tasks, and optimizing revenue management. The application seeks to improve patient care, streamline healthcare processes, ensure compliance with regulations, and reduce costs. It is designed for use by health insurance beneficiaries, healthcare providers, and health insurance agents, offering a seamless, user-friendly experience across these roles.",
      tech: ["Next Js", "Typescript", "Tailwindcss", "Material UI", "Redux"],
      image: "/Assets/kurnode.png",
      link: "#",
      reverse: true,
    },
  ];

  return (
    <div className="mb-[100px] overflow-hidden" id="projects">
      <div className="space-y-[8px]" data-aos="fade-up">
        <p className="font-[500] text-[35px] md:text-[40px]">Projects</p>
        <p className="font-[500] text-[15px] md:text-[20px]">
          Explore Some of the Projects I Have Worked On.
        </p>
      </div>

      <div className="mt-[32px] space-y-[48px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid place-items-center lg:flex items-center lg:justify-between gap-[32px] ${
              project.reverse ? "lg:flex-row-reverse" : ""
            }`}
            data-aos={project.reverse ? "fade-left" : "fade-right"}
          >
            <div
              className="max-w-[700px] text-center md:text-left space-y-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="font-medium text-[20px] md:text-[24px]">
                {project.name}
              </p>
              <h1 className="font-bold text-[36px] md:text-[56px] leading-tight hidden">
                {project.role}
              </h1>
              <p className="font-normal text-[14px] md:text-[16px] text-justify md:text-left ">
                {project.description}
              </p>

              <div className="flex items-center gap-[33px] flex-wrap font-[400] text-[14px] md:text-[16px] text-[#64FFDA]">
                {project.tech.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[10px] rounded-[8px] bg-[#FFFFFF] inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <p className="font-[500] text-[16px] text-[#48484A]">
                  Visit live link
                </p>
                <Image
                  src="/Assets/link-square-02.svg"
                  alt="Project Link"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </a>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200">
              <Image
                src={project.image}
                alt={`${project.name} Project Image`}
                width={400}
                height={300}
                className="rounded-[8px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

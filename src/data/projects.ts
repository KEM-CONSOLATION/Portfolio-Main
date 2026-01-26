export interface Project {
  name: string;
  role: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
  reverse: boolean;
}

export const projects: Project[] = [
  {
    name: "BoroFuel",
    role: "Frontend Engineer",
    description:
      "A professional landing page website for Borofuel - a fuel access and station-partner app that connects approved drivers with designated filling stations. Features include driver portal, organization ID verification, contact forms, and responsive design with smooth animations.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    image: "/Assets/borofuel.png",
    link: "https://borofuel.org",
    reverse: false,
  },
  {
    name: "ASAP DBA",
    role: "Frontend Engineer",
    description:
      "A modern Next.js project with comprehensive state management solutions. Features include Redux Toolkit, Zustand with persistence, Framer Motion animations, Embla Carousel, and Sonner toast notifications. Built with TypeScript and Tailwind CSS for a robust development experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "Framer Motion",
      "Embla Carousel",
    ],
    image: "/Assets/asapdba.png",
    link: "https://asapdbaservices.com",
    reverse: true,
  },
  {
    name: "Blunt Tribe",
    role: "Frontend Engineer",
    description:
      "A modern web application built with Next.js featuring email functionality, responsive design, and smooth animations. The platform includes contact forms with email integration using Resend and Nodemailer, toast notifications, and a clean, professional UI.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Resend",
      "Nodemailer",
      "Sonner",
    ],
    image: "/Assets/blunttribe.png",
    link: "https://blunttribe.com",
    reverse: false,
  },
  {
    name: "Nexkro",
    role: "Frontend Engineer",
    description:
      "A modern Next.js application featuring carousel components, animations, and email functionality. Built with the latest Next.js 16, React 19, and TypeScript. Includes Framer Motion for smooth animations, Embla Carousel for interactive components, and Resend for email services.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Embla Carousel",
      "Resend",
      "Lucide React",
    ],
    image: "/Assets/nexkro.png",
    link: "https://nexkro.com",
    reverse: true,
  },
  {
    name: "Aerysyn",
    role: "Frontend Engineer",
    description:
      "A cybersecurity-focused platform built with Next.js featuring dark mode support, responsive design, and modern UI components. Includes Radix UI components, Framer Motion animations, email functionality with Nodemailer, and a professional theme system with next-themes.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Nodemailer",
      "next-themes",
    ],
    image: "/Assets/aerysyn.png",
    link: "https://aerysyn.com/",
    reverse: false,
  },
  {
    name: "MagicGames",
    role: "Frontend Engineer",
    description:
      "A gaming platform built with Next.js featuring user authentication, game management, campaign systems, and dashboard functionality. The platform includes phone verification, OTP authentication, subscription management, and a comprehensive gaming experience with real-time updates and user engagement features.",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Zustand",
      "Zod",
    ],
    image: "/Assets/playmagic.png",
    link: "http://playmagic.ng/",
    reverse: false,
  },
  {
    name: "Premium & Classy",
    role: "Frontend Engineer",
    description:
      "A professional event planning website built with Next.js and Sanity CMS. Features include portfolio showcase, service management, client testimonials, booking system, and contact forms. The website serves as a digital business card for event planners with integrated email services and responsive design.",
    tech: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
    ],
    image: "/Assets/premium-classy-events.png",
    link: "https://premiumandclassy.netlify.app",
    reverse: true,
  },
  {
    name: "Work & Shop",
    role: "Frontend Engineer",
    description:
      "A comprehensive marketplace platform connecting skilled professionals, vendors, and customers. Built with Next.js, featuring authentication, service listings, booking system, payment processing, and real-time messaging. The platform enables seamless transactions between service providers and customers.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Axios",
      "AOS",
    ],
    image: "/Assets/workandshop.png",
    link: "https://workandshopapp.com",
    reverse: false,
  },
  {
    name: "Umpire Wave",
    role: "Frontend Engineer",
    description:
      "A creative agency website for Umpire Wave showcasing music production, event coverage, photography, and studio services. Built with Next.js featuring portfolio galleries, brand partnerships, team showcases, and contact forms. The website serves as a digital presence for the agency's creative services.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Slick",
      "EmailJS",
      "AOS",
    ],
    image: "/Assets/umpirewave.png",
    link: "https://umpirewave.com",
    reverse: true,
  },
  {
    name: "Troo",
    role: "Lead Frontend Engineer",
    description:
      "Troo is a comprehensive Restaurant Management Software tailored to elevate the operations of hospitality businesses. With a suite of integrated tools, Troo helps businesses enhance efficiency, improve customer experience, and ultimately boost profitability. Designed with ease of use in mind, the software is built to seamlessly manage front-of-house and kitchen operations while simplifying payment processing and customer interactions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    image: "/Assets/troohq.png",
    link: "https://troohq.com",
    reverse: false,
  },
  {
    name: "Growth Group DC Website",
    role: "Frontend Engineer",
    description:
      "A comprehensive church management platform built with Next.js and Sanity CMS. Features include event management, blog system, audio messages, weekly reports, and department management. The platform serves as a digital hub for church members with real-time content updates, member engagement tools, and administrative dashboards.",
    tech: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Radix UI",
      "AOS",
    ],
    image: "/Assets/growth-groups.png",
    link: "https://dc-calabar.netlify.app",
    reverse: false,
  },
  {
    name: "Ecomarine",
    role: "Frontend Engineer",
    description:
      "A modern maritime services website for Ecomarine, featuring comprehensive information about container services, terminal operations, and shipping solutions. Built with Next.js and includes features like blog management, career listings, FAQ system, and responsive design optimized for the maritime industry.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Zustand",
    ],
    image: "/Assets/ecomarinegroup.png",
    link: "https://site.ecomarinegroup.com",
    reverse: true,
  },
  {
    name: "Kurenode",
    role: "Lead Frontend Engineer",
    description:
      "Kurenode is a health insurance software application aimed at enhancing healthcare delivery for patients and operational efficiency for healthcare providers. Kurenode focuses on integrating patient records, automating administrative tasks, and optimizing revenue management. The application seeks to improve patient care, streamline healthcare processes, ensure compliance with regulations, and reduce costs.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux"],
    image: "/Assets/kurenode.png",
    link: "https://qproxim.netlify.app",
    reverse: true,
  },
];

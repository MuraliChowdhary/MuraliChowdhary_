"use-client";

import Image from "next/image";
// import {
//   GitHubLogoIcon,
//   LinkedInLogoIcon,
//   TwitterLogoIcon,
// } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

import {
  HomeIcon
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FloatingDock } from "./ui/FloatingDock";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const projects = [
    {
      name: "Annseva",
      description:
        "Developed an RBAC feature for secure access, integrated a real-time donation and delivery system with volunteer management, and created an algorithm to optimize food request fulfillment and minimize waste.",
      technologies: ["React", "MongoDb", "Node", "Express"],
      period: "July 2024 - Feb-2025",
      link: "#",
      url: "/annseva.png",
    },
    {
      name: "Inventory Management System",
      description:
        "Built a full-stack IMS with React.js, Node.js, and Prisma, using PostgreSQL and Redis for caching, enhancing stock management, security, and UI efficiency.",
      technologies: [
        "React",
        "Framer Motion",
        "Node.js",
        "Tyescript",
        "Postgresql",
        "Prisma",
        "Redis",
      ],
      period: "Dec 2024 - Mar 2025",
      link: "https://inventorysolutions.vercel.app",
      url: "/ims.png",
    },
    {
      name: "Cross Promotion Platform",
      description:
        "Developed a Discord bot using Node.js and Discord.js to automate newsletter registrations and cross-promotion, improving subscriber growth, creator satisfaction, and creating a self-sustaining system that increased the subscriber base over time.",
      technologies: ["Discord", "Node", "Mongo Atlas"],
      period: "Sep 2024 - Dec-2024",
      link: "https://www.pickandpartner.com/",
      url: "/pnp.png",
    },
    {
      name: "Lumevo",
      description:
        "Developed a motivation-driven social media platform using React.js and Cloudflare Workers, featuring inspiring content, a reward system, JWT authentication, and role-based access control",
      technologies: [
        "React",
        "Hono",
        "Postgresql",
        "Prisma",
        "Cloudflare",
        "Vercel",
      ],
      period: "Dec 2024 - Present",
      link: "https://lumevo.vercel.app/signup",
      url: "/lumevo.png",
    },
  ];

  return (
    <div className="max-w-xl mx-auto px-2  py-8 ">
      <header className="flex items-center mb-8">
        <div className="flex-grow">
          <h1 className="text-5xl font-bold mb-2">Hi, I&apos;m Murali</h1>
          <p className="text-muted-foreground">Hyderabad</p>
        </div>
        <Image
          src="/pic4.jpg"
          alt="Profile"
          width={150}
          height={100}
          className="rounded-full"
        />
      </header>

      {/* Contribution Graph Placeholder
      <div className="mb-8 bg-muted p-4 rounded-lg">
        <p className="text-muted-foreground">Contribution Graph Placeholder (836 contributions in the last year)</p>
      </div> */}

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-muted-foreground text-sm">
          A Full-Stack Developer. I always aim for the best code quality and
          experience. Always excited about using new tech.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Early Startup Experience
        </h2>
        <div className="space-y-4 text-gray-300 text-sm">
          <div>
            <strong className="text-white">Winqroo</strong> – Contributed to
            product development, enhancing user experience and backend
            performance.
          </div>
          <div>
            <strong className="text-white">PickAndPartner</strong> – Improved
            platform efficiency through automation and optimization in both
            backend and frontend tasks.
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <h3 className="font-medium">CVR </h3>
          <p className="text-muted-foreground">
            Bachelor&apos;s in Computer Applications (CSE)
          </p>
          <p className="text-sm text-muted-foreground">2022 - 2026</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex justify-center">
          <div className="rounded-xl shadow-sm w-full max-w-2xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind",
                "Prisma",
                "Postgres",
                "MongoDB",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-muted text-muted-foreground hover:bg-gray-900 hover:text-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <div className="flex justify-center">
          <div className="text-lg rounded-xl px-4 py-2 bg-white text-black mb-5 font-medium">
            My Projects
          </div>
        </div>

        <p className="text-md text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="border-none shadow-none bg-card text-card-foreground bg-card text-card-foreground"
            >
              <div className="flex flex-col h-full">
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={project.url}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-grow p-4">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex flex-col justify-between items-start">
                      <CardTitle className="text-lg font-semibold">
                        {project.name}
                      </CardTitle>
                      {project.period && (
                        <span className="text-xs text-gray-400 bg-black  rounded-md">
                          {project.period}
                        </span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-0 pb-0 flex-grow">
                    <p className="text-sm text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs text-gray-300 bg-gray-800 border-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        className="h-8 rounded-lg border-none   bg-transparent text-xs font-medium bg-white text-black hover:bg-blue-600 hover:text-white"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="px-2">Visit Website</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1 transition-transform group-hover:translate-x-1"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          During my time in College, I worked on several startup-based projects,
          contributed to innovative ideas, and played an active role in their
          development.{" "}
        </p>

        <div className="space-y-6">
          <Card className="border-none bg-black  transition-colors bg-card text-card-foreground">
            <div className="flex items-start p-6">
              <div className="mr-4">
                <Image
                  src="/award.png"
                  alt="Award"
                  width={50}
                  height={50}
                  className="rounded-full border border-gray-600"
                />
              </div>
              <div className="flex-1">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg">
                    Google Solution Challenge Hackathon
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-300 text-sm mt-2">
                    Contributed to Annseva&apos;s backend by developing RBAC for
                    secure access and implementing a real-time donation and
                    delivery coordination system.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-muted text-muted-foreground hover:bg-gray-900 hover:text-white rounded-2xl mt-2 "
                  >
                    <>
                      <a
                        href="https://drive.google.com/file/d/1ssoeQD5cQC3YyYyo9ymJh1mxLqbH7YRn/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Award
                      </a>
                    </>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-5xl font-semibold mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-4 text-md">
          Feel free to send me a direct message on Twitter with your questions.
          I&apos;ll do my best to respond promptly.
        </p>

        <div>
        <FloatingDock
  items={[
    { 
      title: "Home", 
      icon: <HomeIcon />, 
      href: "#home" 
    },
    { 
      title: "X", 
      icon: <FaXTwitter/>,
      href: "https://x.com/Murali74589308" 
    },
    { 
      title: "Linkedin", 
      icon: <FaLinkedinIn/>, 
      href: "https://www.linkedin.com/in/sudireddy-murali-05a10b277/" 
    },
    { 
      title: "github", 
      icon: <IoLogoGithub/>, 
      href: "https://github.com/MuraliChowdhary" 
    },
  ]}
  desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2"
  mobileClassName="fixed bottom-4 right-4"
/>
        </div>
      </section>
    </div>
  );
}

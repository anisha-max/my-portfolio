import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "All React Projects",
    gitLink: "https://github.com/anisha-max/Reactprojects",
    tech: ["React", "Tailwind", "Redux"],
    src: "/my-portfolio/react2.png",
  },
  {
    title: "All JavaScript Projects",
    gitLink: "https://github.com/anisha-max/javascript_practice",
    tech: ["JavaScript", "API"],
    src: "/my-portfolio/js.png",
  },
  {
    title: "Internship Contribution",
    gitLink: "https://www.sevenunique.com/",
    tech: ["Node.js", "MongoDB", "React", "Axios", "Redux"],
    src: "/my-portfolio/sevenunique.png",
  },
  {
    title: "Galaxy Game",
    gitLink: "https://github.com/anisha-max/Previous-projects",
    tech: ["Python"],
    src: "/my-portfolio/galaxy.png",
  },
];

const ProjectCard = () => {
  return (
    <section className="px-6 lg:px-12 py-16 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white">My Projects</h2>
        <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">
          Explore some of my work built with modern tools, clean UI, and focus on scalability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map(({ title, gitLink, tech, src }, index) => (
          <motion.div
            key={index}
            className="relative bg-zinc-800 rounded-xl shadow-lg ring-1 ring-zinc-700/40 
                       hover:ring-sky-500/30 hover:shadow-sky-500/20 
                       transition-all duration-300 hover:scale-105 active:scale-95"
            whileHover={{ y: -4 }}
          >
            <figure className="rounded-t-xl overflow-hidden">
              <img
                src={src}
                alt={`Preview of ${title}`}
                className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
              />
            </figure>

            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-white">{title}</h3>

              <div className="flex flex-wrap gap-2">
                {tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs text-zinc-300 bg-zinc-700/30 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-zinc-600 transition"
                  >
                    #{item}
                  </span>
                ))}
              </div>

              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} on GitHub`}
                className="absolute right-4 top-4 bg-sky-400 text-zinc-950 w-9 h-9 grid place-items-center rounded-lg hover:bg-sky-300 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 14 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;

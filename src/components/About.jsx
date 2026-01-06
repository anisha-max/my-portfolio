import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const stats = [
  { label: "Projects", number: 10 },
  { label: "Internships", number: 2 },
  { label: "Hackathons", number: 3 },
];

export default function About() {
  return (
    <section className="container px-6 lg:px-12 py-16 mx-auto">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="bg-zinc-800/50 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-sky-500/20 transition duration-300">
          <p className="text-white text-lg leading-relaxed">
Over the past year, I’ve been working as a Frontend Developer, gaining real-world experience through in house and multiple client projects. I enjoy transforming ideas into practical digital solutions—whether it’s building responsive dashboards, interactive interfaces, or intuitive user journeys. My work often involves converting Figma designs into clean, efficient, and pixel-perfect UIs while ensuring smooth performance and accessibility across devices.
<br/>
Along with my frontend expertise in React, Next.js, Tailwind CSS, JavaScript, and CSS, I also have a strong foundation in full-stack development, including experience with Node.js, Express, REST APIs, and databases. This helps me understand applications beyond just the UI and collaborate better across teams.
<br/>

This journey has helped me grow as a detail-oriented, problem-solving, and collaborative developer who loves learning, improving, and building meaningful digital products.          </p>

          <div className="flex flex-wrap gap-6 md:gap-10 pt-8">
            {stats.map(({ label, number }, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-xl px-6 py-5 text-center shadow-md hover:bg-zinc-700/40 hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center items-center space-x-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">
                    {number}
                  </span>
                  <span className="text-sky-400 text-2xl md:text-4xl font-semibold">
                    +
                  </span>
                </div>
                <p className="mt-2 text-md md:text-lg font-medium text-white">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

   
        <div className="mt-16">
          <Skill />
        </div>
      </motion.div>
    </section>
  );
}

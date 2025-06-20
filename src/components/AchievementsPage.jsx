import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import { Trophy, Award, Star } from "lucide-react";


const achievements = [
  {
    title: "Working as Junior Devloper",
    date: "Current",
    description:
      "Contributed to the development, testing, and maintenance of web applications in a collaborative team environment. Assisted in building responsive UIs using React.js, managed backend APIs with Node.js and MongoDB, and participated in code reviews, debugging, and version control using Git. Gained hands-on experience with agile workflows, issue tracking, and integrating third-party APIs. Focused on writing clean, maintainable code and learning best practices from senior developers.",
    image: "react2.png",
    category: "project",
    tags: ["React", "Open Source", "Forms"],
    link: "",
  },
  {
    title: "Intership",
    date: "Dec 2024",
    description:
      "Completed a hands-on internship focused on learning and contributing to real-world development projects. Gained experience in frontend development using technologies like HTML, CSS, JavaScript, and React, and worked with backend APIs built with Node.js and MongoDB. Assisted in debugging, feature implementation, UI improvements, and participated in team meetings and code reviews. Strengthened understanding of software development workflows, version control (Git), and deployment processes.",
    image: "ANISHA.jpg",
    category: "certification",
    tags: ["React", "Hooks", "Project"],
  },
  {
    title: "Successfully Deployed Full-Stack Web Applications",
    date: "June 2025",
    description:
      "End-to-end development and deployment of scalable full-stack web applications on Renderb using modern technologies like Next.js, MongoDB, NextAuth, and ImageKit. Implemented secure user authentication, responsive UI, dynamic routing, and API integrations. Projects included real-time media handling, form processing, and cloud-based storage.",
    image: "galaxy.png",
    category: "Live projects",
    tags: ["Next", "Node.js", "React" , "API", "ImageKit"],
    link: "https://fullstack-video-application.onrender.com",
  },
  {
    title: "React Mastery Certification",
    date: "Oct 2024",
    description:
      "Completed an intensive advanced React certification from Scalar covering hooks, state management, and testing.",
    image: "react_certificate.png",
    category: "certification",
    tags: ["React", "Hooks", "Project"],
  }
];

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const stats = [
  { icon: Trophy, label: " Internship", value: "3+" },
  { icon: Award, label: "Project", value: "5+" },
  { icon: Star, label: "CGPA", value: "92+" },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <motion.header
        className="relative z-10 pt-16 pb-8"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="inline-block p-3 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700/50 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Trophy className="w-12 h-12 text-sky-400 mx-auto" />
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-zinc-300 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>

          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            A collection of milestones, certifications, and recognitions that
            showcase my journey in technology and innovation.
          </p>
        </div>
      </motion.header>

      {/* Stats Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 text-center"
              variants={statsVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(39, 39, 42, 0.7)",
              }}
            >
              <stat.icon className="w-8 h-8 text-sky-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements List */}
      <main className="px-6 py-16 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievement Highlights
        </motion.h2>

        <div className="space-y-20">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";
import { Trophy, Award, Star } from "lucide-react";


const achievements = [
  {
    title: "1st Place – Hackathon X",
    date: "March 2024",
    description:
      "Built a climate dashboard using React, Node.js, and public APIs to visualize CO₂ trends and weather impacts.",
    image: "galaxy.png",
    category: "hackathon",
    tags: ["React", "Node.js", "API", "Climate"],
    link: "https://github.com/yourname/climate-dashboard",
  },
  {
    title: "React Mastery Certification",
    date: "June 2023",
    description:
      "Completed an intensive 6-week advanced React certification from XYZ Academy covering hooks, state management, and testing.",
    image: "react.png",
    category: "certification",
    tags: ["React", "Hooks", "Testing"],
  },
  {
    title: "100+ GitHub Stars",
    date: "Nov 2023",
    description:
      "Created a lightweight form-handling library for React that gained traction in the open-source community.",
    image: "react2.png",
    category: "project",
    tags: ["React", "Open Source", "Forms"],
    link: "https://github.com/yourname/react-form-lib",
  },
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
  { icon: Trophy, label: "Hackathons Won", value: "3+" },
  { icon: Award, label: "Certifications", value: "5+" },
  { icon: Star, label: "GitHub Stars", value: "500+" },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
 

      {/* Header Section */}
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

          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
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
              <div className="text-zinc-400 text-sm">{stat.label}</div>
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

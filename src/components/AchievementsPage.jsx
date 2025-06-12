import { motion } from "framer-motion";
import HexagonBackground from './HexagonBackground';

const achievements = [
  {
    title: "1st Place – Hackathon X",
    date: "March 2024",
    description: "Built a climate dashboard using React and Node.js.",
    image: "galaxy.png",
  },
  {
    title: "React Mastery Certification",
    date: "June 2023",
    description: "Completed an advanced React course from XYZ Academy.",
    image: "react.png",
  },
  {
    title: "100+ GitHub Stars",
    date: "Nov 2023",
    description: "Created a form-handling library for React.",
    image: "react2.png",
  },
];

export default function AchievementsPage() {
  return (
    <main className="p-10 mx-auto max-w-5xl">
          <HexagonBackground/>
      <h1 className="text-3xl pt-10 text-center md:text-4xl font-bold text-white mb-4 break-words leading-tight">
        Achievements
      </h1>
      <div className="grid gap-16">
        {achievements.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const containerDirection = isEven ? "md:flex-row" : "md:flex-row-reverse";
          const Rounded = isEven
            ? "rounded-l-full md:rounded-r-lg"
            : "rounded-r-full md:rounded-l-lg";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 70 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl overflow-hidden border border-zinc-600 transition-transform"
            >
              <div
                className={`flex flex-col ${containerDirection} items-center md:items-stretch`}
              >
                <div className="relative w-full md:w-1/3 p-4 ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-64 w-full object-cover ${Rounded}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-zinc-700/30 ${Rounded}`} />
                </div>

                <div className="p-6 md:w-2/3 space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                  <hr className="my-2 border-t border-gray-300 dark:border-gray-700" />
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}

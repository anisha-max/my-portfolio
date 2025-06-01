import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'
import HexagonBackground from './HexagonBackground';

const aboutItem = [
  {
    lable: 'Projects',
    number: 10,
  },
  {
    lable: 'Intership',
    number:" 2" ,
  },
  {
    lable: 'Hackthon',
    number:"3" ,
  },
]

function About() {
  return (
    <section className="container px-6 lg:px-12 pt-8">
            <HexagonBackground />
         <motion.div
              className="md:mx-20 mb-20 py-14"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
      <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-sky-500/20 transition duration-300">
        <p className="text-zinc-300 leading-relaxed text-lg">
        I am a Full Stack Developer with internship experience, during which I have contributed to more than 10 projects ranging from web applications to dynamic user interfaces. I have actively participated in 3+ hackathons, sharpening my problem-solving skills and adapting quickly to new challenges. I’m passionate about building scalable, efficient, and user-friendly applications, and I’m currently available for work opportunities where I can bring my experience and dedication to your team.
        </p>
        <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-6">
          {aboutItem.map(({ lable, number }, key) => (
            <div
              key={key}
              className="bg-zinc-900 rounded-xl px-6 py-4 shadow-md hover:bg-zinc-700/50 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-1">
                <span className="text-3xl md:text-5xl font-extrabold text-white">
                  {number}
                </span>
                <span className="text-sky-400 text-2xl md:text-4xl font-semibold">
                  +
                </span>
              </div>
              <p className="text-md md:text-lg font-semibold text-zinc-300 mt-2">
                {lable}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Skill/>
        </motion.div>
    </section>
  )
}

export default About

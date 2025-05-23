import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import About from './About';

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AnishaParmar _resume.pdf';
    link.download = 'Anisha_Resume.pdf';
    link.click();
  };

  return (
    <>
      <section className="min-h-[90vh] flex items-center justify-center bg-[#0a0f1c] text-white">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <span className="text-cyan-400">Anisha</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0">
            Full Stack Developer passionate about building clean, scalable, and intuitive applications — built with experience, attention to detail, and a commitment to writing efficient, maintainable code. I focus on delivering high-quality solutions that solve real-world problems and provide great user experiences.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 text-lg rounded-xl flex items-center gap-2 shadow-md transition"
              >
                Download CV <IoMdDownload className="text-xl" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[20vw] h-full md:h-full overflow-hidden rounded-xl shadow-xl border-2 mx-auto border-cyan-500">
              <img
                src="/my-portfolio/me.png"
                alt="Anisha profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        className="container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ProjectCard />
      </motion.div>
    </>
  );
}

export default Home;

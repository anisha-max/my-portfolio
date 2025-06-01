import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import About from './About';
import { NavLink } from 'react-router-dom'
import HexagonBackground from './HexagonBackground';
import Contact from './Contact'
import Navbar from './Navbar';
import AchievementsPage from './AchievementsPage';

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AnishaParmar _resume.pdf';
    link.download = 'Anisha_Resume.pdf';
    link.click();
  };

  return (
    <>
      <HexagonBackground />
      <section className='flex w-full  overflow-hidden  text-white md:px-10'>
        <div className=' pt-36 px-4 flex'>
          <div>
            <h1 className='text-6xl'>Anisha Parmar</h1>
            <p className='italic text-[26px] pt-2 font-bold text-sky-400'>Web Developer</p>
            <p className=" text-[20px] max-w-xl">
              Full Stack Developer passionate about building clean, scalable, and intuitive applications — built with experience, attention to detail, and a commitment to writing efficient, maintainable code. I specialize in the <span className='text-[21px] text-sky-400 font-bold'>MERN</span> stack (MongoDB, Express, React, Node.js) and also leverage <span className='text-[21px] font-bold text-sky-400 bold'>Next.js</span> for building high-performance, server-rendered applications. I focus on delivering high-quality solutions that solve real-world problems and provide great user experiences.
            </p>
            <button
              onClick={handleDownload}
              className="px-4 my-4 py-2 rounded text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:from-sky-600 hover:via-sky-700 hover:to-sky-800 transition duration-300"
            >
              Download Resume <IoMdDownload className='float-right ms-2 text-xl mt-1' />
            </button>
          </div>
          <img src="images/developer.png" className='h-[30rem] ms-32 hidden lg:block  hover:scale-105 transition-transform duration-300 ease-in-out '></img>
        </div>

        <Navbar />
      </section>


      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About id="about" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ProjectCard />
      </motion.div>

<motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Contact/>
      </motion.div>

<AchievementsPage/>
    </>
  );
}

export default Home;

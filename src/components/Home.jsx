import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import About from './About';
import { NavLink } from 'react-router-dom'

import Contact from './Contact'
import Navbar from './Navbar';
import AchievementsPage from './AchievementsPage';

function Home() {
  return (
    <>
   
      <section className='flex w-full  overflow-hidden  text-white md:px-10'>
        <div className=' pt-36 px-4 flex'>
          <div className='md:ps-48'>
            <h1 className='text-6xl'>Anisha Parmar</h1>
            <p className='italic text-[26px] pt-2 font-bold text-sky-400'>Web Developer</p>
            <p className=" text-[20px] max-w- mb-4">
I am a Frontend Developer with 1 year of hands-on experience and 2 internships, with a strong foundation in Full Stack development. I specialize in building responsive, user-friendly interfaces using<span className='text-[21px] text-sky-400 font-bold'> React, JavaScript, HTML, and CSS, </span> while also having experience working with backend technologies like <span className='text-[21px] text-sky-400 font-bold'>Node.js, Express, and databases </span>. I focus on writing clean, efficient code and creating seamless web experiences.
            </p>
            <a
              href='/AnishaParmarResume.pdf' target='_blank'
              className="px-4 my-4 py-2 rounded text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:from-sky-600 hover:via-sky-700 hover:to-sky-800 transition duration-300"
            >
              Download Resume 
            </a>
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

    </>
  );
}

export default Home;

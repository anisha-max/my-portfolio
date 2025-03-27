import React from 'react'
import { IoMdDownload } from "react-icons/io"
import ProjectCard from './ProjectCard'
import Reviews from './Reviews'
import Contact from './Contact'
import About from './About'

function Home() {
  return (
    <>
      <div className=" min-h-[70vh] flex">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center xl:max-w-6xl  mx-auto">
          <div className="space-y-3"> 
            <div className="flex text-zinc-400 gap-2">
              <span className="relative w-3 h-3 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"></span>
              </span> 
              <p className="text-sm">Available for Work</p>
            </div>

         
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white lg:leading-snug max-w-[28ch] lg:max-w-[18ch] mt-2">
              Crafting Clean and Scalable Code with Passion.
            </h1>
            <div className="flex pt-4 gap-4">
              <button className="btn bg-sky-400 hover:bg-sky-300 text-zinc-900 flex items-center gap-2 text-lg font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-sky-400/50">
                Download CV <IoMdDownload />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <figure className="w-full max-w-[420px] mx-auto bg-gradient-to-t from-sky-400 via-25% via-sky-500 to-65% rounded-[55px] overflow-hidden shadow-2xl">
              <img
                className="w-full rounded-[55px] hover:scale-105 transition-transform duration-500 ease-in-out"
                width={380}
                src="/images/pic.png"
                alt="Developer Image"
              />
            </figure>
          </div>
        </div>
      </div>


<div className='container'>
<About/>
</div>

<div className='container'>
<ProjectCard />
</div>
    
<div className='md:mx-20 mb-5'>
<Contact />
</div>
    
    </>
  )
}

export default Home

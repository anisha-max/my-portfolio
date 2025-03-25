import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

function Home() {
  return (
    <section className='container'>
      <div className=' lg:grid lg:grid-cols-2 lg:gap-10 items-center xl:max-w-6xl mx-auto'>
        <div className=' items-center '>
          <div className='flex items-center text-zinc-400 gap-2 '>
            <span className="relative w-2 h-2 rounded-full bg-emerald-500">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping">
              </span>
            </span>
            <p>       Lorem ipsum dolor,</p>

          </div>
          <div className='text-5xl leading-tight font-semibold lg:text-[45px] lg:leading-1.5 heading-1 sm:max-w-[28ch] lg:max-w-[15ch]'>
            sit amet consectetur adipisicing elit. Doloribus, officiis. Lorem, ipsum.

          </div>

          <div
            className='flex pt-5 gap-3' >

            <button className='btn btn-primary text-[18px] bg-sky-400 flex items-center gap-2 text-zinc-900 hover:bg-sky-300  rounded-lg font-semibold p-2'>
              hello
              <IoMdDownload />
            </button>
            <button className='btn btn-primary text-[18px] bg-zinc-800 hover:bg-zinc-700 flex items-center gap-2 text-zinc-50   rounded-lg  p-2'>
              Scroll down
              <FaAngleDown />
            </button>
          </div>

        </div>
        <div className='hidden lg:block'>

          <figure className='w-full max-w-[488px] overflow-hidden bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[65px]'>
            <img className='w-full' width={400} src="/imgaes/pic.png" alt='devloper image'>
            </img>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Home

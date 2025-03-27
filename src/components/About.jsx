import React from 'react'
import Skill from './Skill'

const aboutItem = [
  {
    lable: 'Projects',
    number: 10,
  },
]

function About() {
  return (
    <section className="container px-6 lg:px-12 pt-8">
      <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-sky-500/20 transition duration-300">
        <p className="text-zinc-300 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem?
          Quibusdam nemo placeat possimus optio minus tempora quisquam
          consequuntur omnis doloremque molestias. Suscipit id voluptas deleniti
          qui maxime cumque tempora, exercitationem iste vel repellendus officia.
          Cupiditate accusantium vero maxime consectetur adipisci ipsam iure
          voluptatibus magni! Deserunt tenetur placeat facilis veniam!
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
    </section>
  )
}

export default About

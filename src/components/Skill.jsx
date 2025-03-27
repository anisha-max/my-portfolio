import React from 'react'

function Skill() {
  const skills = [
    {
      image: '/images/pic.png',
      name: 'JavaScript',
      des: 'Powerful language for building web applications.',
    },
    {
      image: '/images/pic.png',
      name: 'React',
      des: 'Component-based frontend library for building UIs.',
    },
    {
      image: '/images/pic.png',
      name: 'MongoDB',
      des: 'NoSQL database for handling large-scale data.',
    },
    {
      image: '/images/pic.png',
      name: 'Node.js',
      des: 'JavaScript runtime environment for backend development.',
    },
    {
      image: '/images/pic.png',
      name: 'GitHub',
      des: 'Platform to manage code, collaborate, and deploy.',
    },
    {
      image: '/images/pic.png',
      name: 'Tailwind CSS',
      des: 'Utility-first CSS framework for faster UI development.',
    },
    {
      image: '/images/pic.png',
      name: 'Bootstrap',
      des: 'Responsive design framework with prebuilt components.',
    },
    {
      image: '/images/pic.png',
      name: 'HTML5',
      des: 'The backbone of web content and structure.',
    },
    {
      image: '/images/pic.png',
      name: 'CSS3',
      des: 'Styling language to bring web pages to life.',
    },
  ]

  return (
    <section className="container mx-auto px-6 lg:px-12 py-12">
      <div className=" mb-12">
        <h2 className="text-3xl font-bold text-white mb-3">
          Essential Tools I Use
        </h2>
        <p className="text-zinc-400 max-w-2xl ">
          Mastering modern technologies to create scalable, efficient, and
          high-performing applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map(({ image, name, des }, key) => (
          <div
            key={key}
            className="bg-zinc-800/70 rounded-xl p-5 shadow-lg transition-all duration-300 hover:shadow-sky-500/20 hover:-translate-y-2 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              {/* Skill Icon */}
              <figure className="bg-zinc-700/50 p-3 rounded-lg shadow-md ring-1 ring-zinc-500/20 transition-transform hover:scale-105">
                <img
                  src={image}
                  alt={name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </figure>

              {/* Skill Details */}
              <div>
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-zinc-400">{des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill

import React from 'react'

function ProjectCard() {
  const Projects = [
    {
      title: "Project One",
      gitLink: "/",
      Tech: ["React", "Tailwind"]
    },
    {
      title: "Project Two",
      gitLink: "/",
      Tech: ["JavaScript", "API"]
    },
    {
      title: "Project Three",
      gitLink: "/",
      Tech: ["Node.js", "MongoDB"]
    },
    {
      title: "Project Four",
      gitLink: "/",
      Tech: ["Next.js", "TypeScript"]
    }
  ]

  return (
    <section className="mx-auto px-6 lg:px-12 py-10">
      <h3 className="font-bold text-4xl text-white">My Projects</h3>
      <p className="text-zinc-400 text-lg my-4 max-w-2xl">
        Here are some of my latest projects built using modern technologies and best practices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto mt-8">
        {Projects.map(({ title, gitLink, Tech }, key) => (
          <div
            key={key}
            className="relative max-w-sm bg-zinc-800/50 rounded-lg shadow-lg ring-1 ring-zinc-700/40 
                      hover:ring-sky-500/30 hover:shadow-sky-500/20 
                      transition-all duration-300 ease-in-out 
                      hover:scale-105 active:scale-95"
          >
            {/* Image Section */}
            <figure className="rounded-lg aspect-[5/3] overflow-hidden p-3"> {/* Adjusted aspect ratio */}
              <img
                className="rounded-lg w-full h-[180px] object-cover hover:scale-105 transition-transform duration-300"
                src="/images/pic.png"
                alt={title}
              />
            </figure>

            {/* Card Content */}
            <div className="p-4 space-y-3">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {Tech.map((tech, index) => (
                  <p
                    key={index}
                    className="text-xs text-zinc-400 h-8 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                  >
                    # {tech}
                  </p>
                ))}
              </div>

              {/* Project Title */}
              <h6 className="text-2xl font-bold text-zinc-50">{title}</h6>

              {/* GitHub Link Button */}
              <a
                href={gitLink}
                className="absolute right-5 top-5 bg-sky-400 text-zinc-950 w-10 h-10 grid place-items-center rounded-lg hover:bg-sky-300 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectCard

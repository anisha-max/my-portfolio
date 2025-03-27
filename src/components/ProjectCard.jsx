import React from 'react'


function ProjectCard() {
    const Projects = [
        {
            title: "lorem2",
            gitLink: "/",
            Tech: ["hello", "world"]
        },
        {
            title: "lorem2",
            gitLink: "/",
            Tech: ["hello", "world"]
        },
        {
            title: "lorem2",
            gitLink: "/",
            Tech: ["hello", "world"]
        },
        {
            title: "lorem2",
            gitLink: "/",
            Tech: ["hello", "world"]
        }
    ]
    return (
        <section className=' grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 md:grid-cols-3 gap-5 mx-auto'>
            {
                Projects.map(({ title, gitLink, Tech }, key) => (
                    <div className="relative max-w-sm ring-inset ring-2 ring-zinc-700/40 rounded-lg shadow-lg bg-zinc-800/50 hover:ring-sky-500/30 hover:shadow-sky-500/20 hover:scale-105 transition-all duration-300" key={key}>
                        <figure className=' rounded-lg aspect-square overflow-hidden p-2  '>
                            <img className="rounded-lg h-full " src="/imgaes/pic.png" alt="" />
                        </figure >


                        <div className="p-3 flex">
                           <div>
                           <div className='flex gap-2 mb-1'>
                                {
                                    Tech.map((tech, key) => (
                                        <p className='text-zinc-400 h-8 bg-zinc-50/5 grid items-center px-3 rounded-lg' key={key}># {tech}</p>
                                    ))
                                }
                            </div>
                            <h6 className="mb-2 text-2xl font-bold tracking-tight text-zinc-50">{title}</h6>
                           </div>



                            <a href={gitLink} className=' absolute right-5 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 w-11 h-11 '>

                                <svg className="rtl:rotate-180 w-3.5 h-3.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default ProjectCard

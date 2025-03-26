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
        <section className=' grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3  mx-auto'>
            {
                Projects.map(({ title, gitLink, Tech }, key) => (
                    <div className="max-w-sm ring-inset ring-2 ring-zinc-50/10 rounded-lg shadow-sm bg-zinc-800/50" key={key}>
                        <figure className=' rounded-lg overflow-hidden p-2  '>
                            <img className="rounded-lg" src="/imgaes/pic.png" alt="" />
                        </figure >


                        <div className="p-3">
                            <div className='flex gap-2 mb-1'>
                                {
                                    Tech.map((tech , key) => (
                                        <p className='text-zinc-400' key={key}># {tech}</p>
                                    ))
                                }
                            </div>
                            <h6 className="mb-2 text-2xl font-bold tracking-tight text-zinc-50">{title}</h6>




                            <div className='flex gap-3'>
                                <a href="#" className="inline-flex btn btn-primary text-[18px] bg-sky-400  items-center gap-2 text-zinc-900 hover:bg-sky-300  rounded-lg font-semibold p-2">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                                <a className='btn btn-primary text-[18px] bg-zinc-800 hover:bg-zinc-700 flex items-center gap-2 text-zinc-50   rounded-lg  p-2' href={gitLink}>
                                    Link to project
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default ProjectCard

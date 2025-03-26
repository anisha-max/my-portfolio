import React from 'react'

function Skill() {
    const skills = [
        {
            image: "/imgaes/pic.png",
            name: "Javascript",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "React",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "Moongo DB",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "Node Js",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "GitHub",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "Tailwind",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "Bootstrap",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "HTML",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
        {
            image: "/imgaes/pic.png",
            name: "CSS",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sapiente."
        },
    ]

    return (
        <section className='container'>
            <p className=' font-bold text-2xl'>Essential Tools I Use</p>
            <p className='text-zinc-400 font-semibold max-w-[50ch] mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste natus placeat nihil culpa facilis nisi voluptas repellendus neque. Hic?
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 '>


                {
                    skills.map(({ image, name, des }, key) => (
                        <div className='ring-inset ring-2 ring-zinc-50/10 rounded-2xl p-3  gap-3 transition-colors hover:bg-zinc-800 ' key={key}>
                            <div className='flex items-center gap-3'>
                                <figure className='bg-zinc-700/50 rounded-lg overflow-hidden p-2 group-hover:bg-zinc-900 ring-inset transition-colors ring-1 ring-zinc-500'>
                                    <img className='' src={image} width={50} height={50}>
                                    </img>
                                </figure>
                                <div>
                                    <h2 className='text-md font-bold'>
                                        {name}
                                    </h2>
                                    <p className='font-semibold'>
                                        {des}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </section>

    )
}

export default Skill

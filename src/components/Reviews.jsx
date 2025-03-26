import React from 'react'
const reviews = [
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam? ",
        name: "lorem",
        imageSrc: "/imgaes/pic.png",
        company: "lorem"
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam? ",
        name: "lorem",
        imageSrc: "/imgaes/pic.png",
        company: "lorem"
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam? ",
        name: "lorem",
        imageSrc: "/imgaes/pic.png",
        company: "lorem"
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam? ",
        name: "lorem",
        imageSrc: "/imgaes/pic.png",
        company: "lorem"
    }
]

function Reviews() {
    return (
        <section className='flex items-stretch gap-3 w-fit'>
            {reviews.map(({ content, name, imageSrc, company }) => (
                <div className='bg-zinc-800 p-5 rounded-lg min-w-[320px] flex flex-col lg:min-w-[420px}'>

                    <div className='flex items-center gap-1 '>
                        {
//stars
                        }

                    </div>

                    <p className='text-zinc-400'>{content}</p>
                    <div className='flex items-center gap-3 mt-auto'>
                        <figure className='img-box rounded-lg'>
                            <img src={imageSrc} alt='' className='' width={44} height={44}></img>
                        </figure>


                        <div>
                            <p className=' text-md'>{name}</p>
                            <p className='text-xs text-zinc-400 tracking-wider'>{company}</p>
                        </div>
                    </div>
                </div>

            ))}

        </section>
    )
}

export default Reviews

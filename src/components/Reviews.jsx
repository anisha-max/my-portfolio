import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa"

const reviews = [
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam?",
        name: "John Doe",
        imageSrc: "/imgaes/pic.png",
        company: "Tech Corp",
        rating: 5
    },
    {
        content: "A wonderful experience working with such a talented developer. Highly recommended!",
        name: "Jane Smith",
        imageSrc: "/imgaes/pic.png",
        company: "Creative Studio",
        rating: 4
    },
    {
        content: "Professional, timely, and highly communicative throughout the project.",
        name: "Alex Brown",
        imageSrc: "/imgaes/pic.png",
        company: "Innovate Labs",
        rating: 3
    },
    {
        content: "Delivered beyond expectations! Will definitely collaborate again.",
        name: "Michael Lee",
        imageSrc: "/imgaes/pic.png",
        company: "Pixel Agency",
        rating: 4
    }
]

function Reviews() {
    return (
        <section className='container mx-auto px-4 py-10'>
            <h3 className='text-3xl font-bold text-zinc-100 mb-6'>Client Reviews</h3>
            <p className='text-white text-lg my-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque reprehenderit praesentium excepturi. Eos, alias?
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center'>
                {reviews.map(({ content, name, imageSrc, company, rating }, key) => (
                    <div
                        className='bg-zinc-800/50 p-6 rounded-xl shadow-lg flex flex-col gap-4 hover:shadow-sky-500/30 transition-all duration-300 w-full max-w-[400px] mx-auto'
                        key={key}
                    >

                        <div className='flex items-center gap-1 text-amber-400 mb-2'>
                            {Array.from({ length: 5 }).map((_, i) =>
                                i < rating ? (
                                    <FaStar key={i} className="w-4 h-4" />
                                ) : (
                                    <FaRegStar key={i} className="w-4 h-4 text-zinc-600" />
                                )
                            )}
                        </div>


                        <p className='text-white leading-relaxed text-sm sm:text-base'>
                            "{content}"
                        </p>


                        <div className='flex items-center gap-4 mt-auto'>
                            <figure className='w-12 h-12 overflow-hidden rounded-lg border border-zinc-700'>
                                <img
                                    src={imageSrc}
                                    alt={name}
                                    className='w-full h-full object-cover'
                                />
                            </figure>

                            <div>
                                <p className='text-lg font-semibold text-zinc-100'>{name}</p>
                                <p className='text-sm text-white'>{company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews

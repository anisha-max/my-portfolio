import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    { href: 'mailto:parmaranisha761@gmail.com', icon:<FaEnvelope/> },
    { href: 'https://www.linkedin.com/in/anisha-parmar-997160309/', icon: <FaLinkedin/> },
    { href: 'https://github.com/anisha-max', icon: <FaGithub/> }
]

function Contact() {
    return (
        <section className='container mt-8 px-4 py-12 bg-zinc-800 rounded-lg text-zinc-100'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-12 items-start'>
          
                <div className='lg:flex lg:flex-col justify-center mb-8 lg:mb-0'>
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 break-words leading-tight'>
                        Contact for Collaboration
                    </h2>

                    <p className='text-zinc-400 mb-6 max-w-md'>
                        I am always open to discussing new projects, ideas, or
                        opportunities. Reach out and let’s build something amazing together!
                    </p>

                    <div className='flex items-center gap-4'>
                        {socialLinks.map(({ href, icon }, key) => (
                            <a
                                key={key}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='w-12 h-12 grid place-items-center bg-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all duration-200 rounded-full shadow-lg hover:scale-110'
                                aria-label={`Visit ${href}`}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

            
                <form
                    action="https://getform.io/f/aejrnrnb"
                    method="POST"
                    className='bg-[#1A1A1A] p-6 rounded-xl shadow-2xl space-y-6 w-full max-w-lg mx-auto lg:max-w-none lg:mx-0'
                >
                  
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="name"
                            className='text-sm font-medium text-zinc-300'
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Your name"
                            className='text-field border border-zinc-700 bg-zinc-900 text-white rounded-lg p-3 focus:ring-2 focus:ring-sky-400 focus:outline-none'
                        />
                    </div>

                
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="email"
                            className='text-sm font-medium text-zinc-300'
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Your email"
                            className='text-field border border-zinc-700 bg-zinc-900 text-white rounded-lg p-3 focus:ring-2 focus:ring-sky-400 focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="message"
                            className='text-sm font-medium text-zinc-300'
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            placeholder="Your message"
                            rows="5"
                            className='text-field border border-zinc-700 bg-zinc-900 text-white rounded-lg p-3 resize-y focus:ring-2 focus:ring-sky-400 focus:outline-none'
                        />
                    </div>
                    <button
                        type="submit"
                        className='w-full bg-sky-500 text-white text-lg font-semibold py-3 rounded-lg hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200 shadow-lg hover:scale-105'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact

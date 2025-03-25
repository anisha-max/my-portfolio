import React from 'react'
const aboutItem = []

function About() {
    return (
        <section className='container'>
            <div className='bg-zinc-800  rounded-2xl p-7 '>
                <p className='text-zinc-300 md:max-w-[60ch]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, rem? Quibusdam nemo placeat possimus optio minus tempora quisquam consequuntur omnis doloremque molestias. Suscipit id voluptas deleniti qui maxime cumque tempora, exercitationem iste vel repellendus officia. Cupiditate accusantium vero maxime consectetur adipisci ipsam iure voluptatibus magni! Deserunt tenetur placeat facilis veniam! </p>
            </div>

<div className=' flex flex-wrap items-center gap-4 md:gap-7'>
   {
    aboutItem.map(({lable , number} , key)=>(
        <div key= {key}>
            <div className='flex items-center'>
<span className='text-2xl md:text-4xl font-bold'>{number}</span>
<span className='text-sky-400 font-semibold md:text-3xl'>+</span>
<p className='text-sm text-zinc-400'>{lable}</p>
            </div>

        </div>
    ))
   }
</div>

        </section>
    )
}

export default About

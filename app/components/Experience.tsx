import React from 'react'
import { workExperience } from '../data'
import { Button, MovingBorder } from './ui/movingborder'

const Experience = () => {
  return (
    <div className="container  py-20 mt-15 text-white flex flex-col items-center" id="testimonials">
      <h1 className='heading lg:text-5xl text-4xl font-bold tracking-tighter'>
        My  {''}
        <span className='text-[#E2CBFF]'>Work experience</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4  grid-cols-1 gap-10 '>
        {workExperience.map((card)=>(
           <Button key={card.id} borderRadius="1.75rem"
           duration={Math.floor(Math.random() * 10000) + 10000}
           className='text-white flex-1 border-slate-800  '>
             <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 gap-4 m-2 '>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-16 md:w-12 w-8 ' />

                <div className='lg:ms-5 tracking-tight'>
                    <h2 className=' text-start text-md md:text-xl font-bold '>{card.title}</h2>
                    <p className='text-start text-sm md:text-lg text-shadow-white mt-3 '>{card.desc}</p>
                </div>
             </div>
           </Button>
        ))}
     </div>
     </div>
  )
}

export default Experience

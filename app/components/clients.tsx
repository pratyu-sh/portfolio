import React from 'react'
import { InfiniteMovingCards } from './ui/Infinitemovingcards'
import { testimonials, companies } from '../data'

const Clients = () => {
  return (
    <div className="container  py-20 mt-15 text-white flex flex-col items-center" id="testimonials">
      <h1 className='heading lg:text-5xl text-4xl font-bold tracking-tighter'>
        Kind words for our {''}
        <span className='text-[#E2CBFF]'>satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center justify-center max-lg:mt-10'>
        <InfiniteMovingCards 
          items={testimonials}
          direction="right" 
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 md:gap-16 max-lg:mt-10 ">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex items-center md:max-60 max-w-32 gap-2 justify-center">
              <img src={img} alt={name} className="md:w-10 w-5 h-16 object-contain" />
              <img src={nameImg} alt={name} className="md:w-24 w-20 h-16 object-contain ml-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients

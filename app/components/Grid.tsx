import React from 'react'
import { BentoGrid } from './ui/BentoGrid'
import { BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '../data'
import { section } from 'framer-motion/client'
const Grid = () => {
  return (
    <section id='about'>
     <h1 className='text-white text-center text-4xl font-bold mb-3 tracking-tight'>About Myself</h1>
    <BentoGrid>
      {gridItems.map((item) => (
        <BentoGridItem key={item.id} {...item} />
        
      ))}
    </BentoGrid>
     


      </section>
  )
};

export default Grid

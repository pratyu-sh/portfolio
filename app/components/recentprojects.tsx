import { desc, div, img } from 'framer-motion/client'
import React from 'react'
import { projects } from '../data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const recentprojects = () => {
  return (
    <section id='projects'> 
    <div className="container py-20 mt-15  text-white flex flex-col items-center">
       <h1 className='heading lg:text-5xl text-4xl font-bold tracking-tighter'>
        A Small selection of {''}
         <span className='text-[#E2CBFF]'>recent projects</span>
       </h1>
       <div className='flex flex-wrap  items-center justify-center p-4  gap-x-24 gap-y-8 mt-10 '>
         {projects.map(({id,title,des,img,iconLists})=> (
              
              <div key={id} className='sm:h-[41rem]  h-[32rem]  lg:min-h-[32.5rem]  flex items-center justify-center flex-col sm:w-[570px] w-[80vw] '>

                <PinContainer title={title} href={img}>
                    <div className='flex items-center justify-center sm:w-[570px] w-[80vw] 
                    overflow-hidden h-[35vh] sm:h-[40vh] mb-5'>  
               
                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]' >
                        <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img
                    src={img}
                    alt={title} 
                    className='z-10 absolute bottom-0'
                    />
        
                    </div>

            
                </PinContainer  >
                    <h1 className='lg:text-2xl md:mt-5  text-white md:text-2xl text-base font-medium mt-4 tracking-tight text-center'>
                     {title}
                    </h1> 
                    <p className='lg:text-sm text-neutral-400 md:text-lg text-sm font-normal mt-4 tracking-tight text-center flex flex-col'> 
                      {des}
                    </p>
                  <div className='flex items-center justify-between mt-7 mb-3'>
                    <div className='flex items-center gap-3'>

                      {iconLists.map((icon,index)=> (
                        <div key={index} className='flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8
                        'style={{transform: 'translateX(-${5*index*2}px)'}}>
                         
                          <img src={icon} alt={icon} className='p-2' />
                        </div>
                      ))}

                    </div>
                  <div className='flex justify-center items-center'>
                      <p className='lg:text-sm tracking-tight md:text-xs text-sm text-purple-50 '>Check Live site</p>
                      <FaLocationArrow className='ms-3' color='#CBACF9' />
                    </div>
                  </div>
                   



              </div>
          
         )
            
         )} 

         
       </div>
    </div>
    </section>
  )
}

export default recentprojects

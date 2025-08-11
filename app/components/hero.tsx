import React from 'react'
import { Spotlight } from "./ui/spotlight";
import { cn } from '../utils/cn';
import { TextGenerateEffect } from './ui/textgenerateeffect';
import MagicButton from './ui/magicbutton';
import { FaLocationArrow } from 'react-icons/fa';
const hero = () => {
  return (
    <>
    <div className='pb-20 pt-38 h-screen '>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill= "white"'/>
        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw] fill= "purple"'/>
        <Spotlight className='-top-40 -left-80  h-[80vh] w-[50vw] fill= "blue"'/>
      </div>

     <div className="absolute top-0 left-0  flex h-screen w-full items-center justify-center bg-black-950 dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-black " ></div>
      <p className="relative z-20 bg-gradient-to-b from-gray-800 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
       
      </p> 
      
    </div>

    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[86vw] md-max-w-2xl lg-max-w-[60vw] flex flex-col items-center justify-center '>
        <h2 className='uppercase tracking-widest text-blue-100 text-center text-xs max-w-80'>
          Building Dynamic with Next.js
        </h2>

        <TextGenerateEffect className=' text-blue-100 text-4xl  md:text-5xl lg:text-6xl ' words={'Transforming Ideas into  Interactive User Experiences'}/>
         <p className='text-center  md:text-lg lg:text-2xl text-sm tracking-tight mt-4 mb-2 text-cyan-50 '> Hi I'm Pratyush Srivastava a Web Develeoper & Designer based in India</p>
      
        <a href="#about" ><MagicButton title="Show My Work" icon={<FaLocationArrow/>} position='right' /></a>
      
      
      
      </div>

    </div>

    
   
    </div>
 
    </>
  )
}

export default hero

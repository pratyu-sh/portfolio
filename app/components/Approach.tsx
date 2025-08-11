// app/components/Approach.tsx
"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

export function Approach()  {
  return (
    <section className="w-full text-white py-20">
      <h1 className="heading">
        My <span className="text-[#E2CBFF]">Approach</span>
      </h1>
     <div className="container  py-20 mt-15 text-white flex flex-col items-center" id="testimonials">
      <p className='text-center font-famly-["PoorStory"] text-slate-400 uppercase mb-1'>Here how i solve</p>
      <h1 className='heading lg:text-5xl text-4xl font-bold tracking-tighter'>
        My  {''}
        <span className='text-[#E2CBFF]'>Approach</span>
      </h1>
      </div>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-4 mx-auto px-8">
        <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1"  />}
        
         desc="We'll colaborate to map out your website's goals , target audience and key functionalities. We will discuss
         things like site structure, content strategy and user experience ."
        >
          
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Design Prototype" icon={<AceternityIcon order="Phase 2" />}
         desc="Once we agree on the plan we'll move on to the design phase. I'll create wireframes and mockups to visualize the layout and user interface. 
         We'll iterate on the design until it meets your expectations." >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Develop & Launch" icon={<AceternityIcon order="Phase 3"/>}
        desc="We will develop using modern web technologies to ensure your site is fast, responsive and secure.
        After thorough testing we'll launch your website.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}
 
const Card = ({
  title,
  icon,
  children,
  desc
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4  lg:h-[35rem] relative rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p  className="text-sm text-zinc-400 text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-2 ">{desc}</p>
      </div>
    </div>
  );
};
 
const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div>
      <button className="relative mt-10 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
       <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {order}
       </span>
    </button>
    </div>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
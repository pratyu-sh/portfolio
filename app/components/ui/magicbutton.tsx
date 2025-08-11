import React from 'react'

const magicbutton = ({title,icon ,position,handleClick,otherClasses}:{
    title:string;
    icon?:  React.ReactNode;
    position?:string;
    handleClick?:()=>void;
    otherClasses?:string;
}) => {
  return (
    <div>
      <button className="relative inline-flex h-10 mt-4  overflow-hidden rounded-lg md:w-60 md:mt-10 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
       <span className={"inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-sm tracking-tight text-white backdrop-blur-3xl ${otherClasses}"}>
      {position ==='left' && icon }
      {title}
      {position ==='right' && icon }
      
       </span>
       </button>
    </div>
  )
}

export default magicbutton

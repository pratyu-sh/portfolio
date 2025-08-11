import { cn } from "../../utils/cn";
import { BackgroundGradientAnimation } from "./backgroundganimation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className="min-h-screen bg-gradient-to-br w-[70vw] from-black via-neutral-900 to-black p-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "🚀 What I Do",
            desc: "Web Development    UI/UX Design    AI Agent Development    Branding & Digital Strategy",
            id:0
          },
          {
            title: "⚡ How I Work",
            desc: "I design with users in mind, code for performance, and deliver with precision — balancing functionality, aesthetics, and speed.",
            id:1
          },
          {
            title: "🎯 Current Focus",
            desc: "Exploring AI-driven web apps, real-time systems, and next-gen design workflows.",
            id:3
           
          },
          {
            title: "🌱 Beyond Work",
            desc: "Lifelong learner & tech explorer — always experimenting with AI and creative problem-solving.",
            id:4
          },
             
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-12 py-16  text-white shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl hover:border-white/20"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-white/80">{item.desc}</p>
            <p className="text-sm text-white/80 border-1 border-gray-400 rounded-3xl px-3 py-1">UIUX</p>
            
            
            {/* <p className="text-sm text-white/80">{item.desc}</p> */}




          </div>
          

          ))}

       
           
     



      
      </div>
         <div className="bg-white/5 border mt-6 grid  grid-cols-1 gap-4 lg:grid-cols-2 border-white/10 backdrop-blur-lg rounded-2xl p-12 py-16  text-white shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl hover:border-white/20">
           
           {/* <BackgroundGradientAnimation size="sm" className="rounded-full z-1  flex items-center justify-center flex-col" >
            <h1 className="text-4xl z-10 font-semibold mb-2 mt-89 tracking-tight">Hey want to work together</h1>
            <a href="" className="ext-md z-10  tracking-tighter bg-black text-amber-50 px-9 py-2 rounded-3xl  m-5">Connect</a>
           </BackgroundGradientAnimation> */}
           <div className=" w-full h-full border  border-gray-500 backdrop-blur-lg rounded-2xl bg-black/20">
            <img className="w-full h-full rounded-2xl " src="pratyush1.png" alt="" />
           </div>
            <div className=" w-full h-full border p-4   border-black  backdrop-blur-lg rounded-2xl bg-black/20">
             <p className="lg:text-sm md:text-sm text-xs mb-2 uppercase text-shadow-zinc-500  ">ABOUT ME</p>
             <h1 className="lg:text-4xl md:text-2xl text-2xl   font-semibold mb-2 mt-[0.5] tracking-tight text-white">Pratyush Srivastava</h1>
             <p className="text-sm lg:text-lg mb-5 text-white/80 tracking-tight" >I’m Pratyush Srivastava — a web developer, UI/UX designer, and AI enthusiast who loves turning ideas into fast, functional, and beautiful digital experiences. I blend code, design, and creativity to craft solutions that work and wow.</p>

            <p className="text-sm text-white/80 border-1 w-[10rem] text-center border-gray-400 rounded-3xl px-2 py-1">Web Development</p>
            <p className="text-sm text-white/80 border-1 w-[10rem] text-center border-gray-400 rounded-3xl px-2 py-1">UIUX Design</p>
            <p className="text-sm text-white/80 border-1 w-[10rem] text-center border-gray-400 rounded-3xl px-2 py-1">NextJS </p>



           </div>
             


          </div>
           
           
    </section>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id:Number
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input  row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

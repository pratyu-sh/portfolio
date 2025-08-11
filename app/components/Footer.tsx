import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <p className='text-white text-sm px-6 py-2 text-center border-1 mb-4 border-gray-400 rounded-3xl'>Available for work</p>
        <h1 className="lg:text-4xl m-1 md:mt-5 text-2xl  text-white md:text-2xl  font-medium mt-4 tracking-tight text-center">
         Curious about what we can create together? <br />Let’s bring something extraordinary to life!
        </h1>
        <p className="text-white-200 text-sm md:mt-4 my-5 text-center text-gray-500">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="pratyushsrivastava875@gmail.com">
          <button className="relative inline-flex h-12 mb-5 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Connect Me
            </span>
          </button>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="lg:text-base text[36px]  md:text-base text-[12px] md:font-normal font-light text-white">
          Copyright © 2025 Pratyush Srivastava
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {["twit", "insta", "link"].map((info,link) => (
            <div
              key={info}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              
              <a href=""><img src={`/${info}.svg`} alt="icons" width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

import Image from 'next/image'
import React from 'react'
import arrow from '../assets/arrow.png'
const Header = () => {
  return (
    <div className='header   text-light py-2 px-3  lg:py-3 lg:px-3'>

    <div className='header flex justify-between items-center '> 
      <h1 className="lg:text-4xl text-xl "> ThoughtBrigde </h1>
      <button className='btn  flex  items-center boder lg:text-2xl border-white border-solid border-[1px] font-medium shadow-[-7px_4px_0px_#fff] text-sm py-1 px-1'>Get started 
        <Image className='h-7 w-7 ml-2 invert' 
        src={ arrow }
        />
      </button>
    </div>
    <div className='text-center my-8'>
        <h1 className='lg:text-4xl text-xl '>Latest Blogs</h1>
        <p className='mt-2 m-auto sm:text-base text-xs max-w-[740px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <form className='border-[1px] lg:w-[35%] lg:px-3 rounded-lg py-2 mt-5  w-[80%] m-auto flex justify-between items-center px-2'>
            <input type="email" placeholder='Enter your email' className='w-[80%] lg:text-[16px]  text-[14px] m-auto p-1 bg-transparent outline-none'/>
           <button className='lg:text-[16px] lg:hover:bg-white lg:hover:text-black transition-all lg:px-2  lg:py-2 text-[14px]'>Subscribe</button>
        </form>
    </div>
    </div>
  )
}

export default Header

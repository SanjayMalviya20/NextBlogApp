import Link from "next/link";
import eximg from "../assets/cyborg.png";
import right_arrow from "../assets/right-arrow.png";
import Image from 'next/image'
import React from 'react'

const Blogitmes = ({
  id,
  img,
  title,
  desc,
  categrery,
}) => {
  return (
  
    <div className="max-w-[300px] cursor-pointer hover:shadow-md hover:duration-100 hover:shadow-white rounded overflow-hidden shadow-lg border border-white bg-black">
      <Link href={`/blogs/${id}`}>
      <Image className="h-[180px] object-cover" 
      src=
      {eximg}
       alt="Card Image" />
       </Link>

      <div className="px-6 py-3">
        <div className="font-bold bg-gray-700 px-2 rounded-md inline text-xl mb-2">{categrery}</div>
        <p className="text-gray-300 text-base mb-1">
          {title}
        </p>
        <p className="text-gray-400 text-sm">
           {desc}
        </p>
        <Link
          href={`/blogs/${id}`}> 
        <h1 className="cursor-pointer text-md gap-2 flex  text-white  w-[120px] mt-1  items-center px-1 rounded-md ">read more <Image className=" invert w-[20px]" src={right_arrow}/></h1>
        </Link>
      </div>
    </div>
  
   
  )
}

export default Blogitmes

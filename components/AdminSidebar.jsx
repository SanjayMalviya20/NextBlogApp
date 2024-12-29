"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AdminSidebar = () => {
    const [Close, setClose] = useState(false);
    const router =useRouter()
  return (
    
      <>  
      {Close ?
      <div className='flex'>
        <div className="bg-black border border-white  h-screen w-64 p-4 flex flex-col justify-between">
      <div className="logo mb-4 flex justify-between items-center">
        {/* <img src="logo.png" alt="ThoughtBridge Logo" className="w-32" /> */}
        <h1 className="text-white  text-2xl font-semibold">ThoughtBridge</h1>

       {<div onClick={()=>setClose((pre)=>!pre)} className={`cross cursor-pointer lg: block text-2xl text-gray-400`}>x</div>}
      </div>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <button onClick={() => router.push("/admin/bloglist")} className="text-white bg-gray-900 w-full hover:text-gray-300 py-2 px-4 rounded-lg">
            BlogList
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => router.push("/admin/subscription")} className="text-white bg-gray-900 w-full hover:text-gray-300 py-2 px-4 rounded-lg">
        Add blog
          </button>
        </li>
        <li className="mb-2">
          <button onClick={() => router.push("/admin/adminproduct")} className="text-white bg-gray-900 w-full hover:text-gray-300 py-2 px-4 rounded-lg">
           Subscription
          </button>
        </li>
      </ul>
    </div>
    </div>: <button  onClick={()=>setClose((pre)=>!pre)} className='bg-gray-800 rounded-[50%] pl-2 pr-2 block absolute top-10 text-xl left-3' >::</button>
    }
    </>
  )
}

export default AdminSidebar


"use client"
import { card } from '@/assets/hello';
import React, { useEffect, useState } from 'react'
import arrow from '../../../assets/arrow.png';
import Image from 'next/image';
import eximg from "../../../assets/cyborg.png";
import Footer from '@/components/Footer';
import Link from 'next/link';
const Blogs = ({params}) => {
    const [Data, setData] = useState(null);
    console.log(Data)
    const fetchData = () => {
        const foundCard = card.find((cards) => cards?.id === params?.id);
        if (foundCard) {
            setData(foundCard);
        } else {
            setData(null); // Reset data if no card is found
        }
    };

    useEffect(() => {
            fetchData();
    }, []);

    return (
        <>
       <div className='header   text-light py-2 px-3 mb-10  lg:py-3 lg:px-3'>
   
       <div className='header flex justify-between items-center '> 
        <Link href={"/"}><h1 className="lg:text-4xl text-xl "> ThoughtBrigde </h1></Link>
         <button className='btn  flex  items-center boder lg:text-2xl border-white border-solid border-[1px] font-medium shadow-[-7px_4px_0px_#fff] text-sm py-1 px-1'>Get started 
           <Image className='h-7 w-7 ml-2 invert' 
           src={ arrow }
           />
         </button>
         
       </div>
       <div className='text-center my-4'>
       <h1 className='lg:text-4xl text-[30px] mb-2'>{Data?.title}</h1>
       {/* create a profile badge here in center rounded with image */}
         <div className="flex flex-col gap-2 justify-center items-center mt-2">
              <div className="flex justify-center items-center bg-white rounded-full h-10 w-10">
                 <Image className="rounded-full" src={eximg} alt="profile" />
              </div>
              <h1 className='text-xl text-yellow-300'>author_name</h1>

    </div>

     
    </div>
         <div className='text-center lg:m-auto lg:w-[500px] my-8'>
              
              <Image className='
              object-cover
                h-[350px] w-[500px] m-auto
              ' src={eximg}/>
            
             
              <h1 className=' text-start text-xl mt-3 font-bold text-slate-500'>Categrery:</h1>
              <p className=' text-start  m-auto sm:text-base text-xl max-w-[740px] '>{Data?.categrery}</p>
              <h1 className=' text-start text-xl mt-3 font-bold text-slate-500'>Description:</h1>
              <p className=' text-start  m-auto sm:text-base text-xl max-w-[740px] '>{Data?.desc}</p>
             
        </div>
         </div>
         <Footer/>
         </>
    )
}

export default Blogs

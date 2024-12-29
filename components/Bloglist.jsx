import React, { useState } from 'react'
import Blogitmes from './Blogitmes';
import { card } from '@/assets/hello';

const Bloglist = () => {
    const [menu, setmenu] = useState("All");
  
    return (
        <>

            <div className='flex justify-center p-4 gap-4  mb-8' >
                <button onClick={() => setmenu("All")} className={menu === "All" && 'bg-white py-1 px-4  text-black'}>All</button>
                <button className={menu === "technology" && 'bg-white py-1 px-4  text-black'} onClick={() => setmenu("technology")}>Technology</button>
                <button className={menu === "startup" && 'bg-white py-1 px-4  text-black'} onClick={() => setmenu("startup")}>Startup</button>
                <button className={menu === "lifestyle" && 'bg-white py-1 px-4  text-black'} onClick={() => setmenu("lifestyle")}>Lifestyle</button>
            </div>
            <div className="flex sm:flex-row sm:justify-normal md:justify-normal lg:justify-normal justify-center  lg:flex-row md:flex-row  gap-4 flex-row p-3 flex-wrap  lg:p-5 lg:gap-5  lg:items-center lg:mt-5">
                {
                    card.filter((card) => card.categrery=== menu
                        || menu === "All"

                    ).map((card, index) => (
                        <Blogitmes key={index} categrery={card.categrery} id={card.id} img={card.img} title={card.title} desc={card.desc} />
                    ))

                }

            </div>
        </>
    )
}

export default Bloglist

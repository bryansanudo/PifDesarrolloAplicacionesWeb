import React from 'react'
import { useState } from "react";



import {  GrLinkPrevious,GrLinkNext } from "react-icons/gr";
import PageSection from "@/components/PageSection";

import product1 from '@/assets/stateArt/product1.png'
import product2 from '@/assets/stateArt/product2.png'
import product3 from '@/assets/stateArt/product3.png'
import product4 from '@/assets/stateArt/product4.png'
import product5 from '@/assets/stateArt/product5.png'

const ARRAY_IMG = [
    product1,
    product2,
    product3,
    product4,
    product5,
]
const StateArt = () => {
    const [index, setIndex] = useState(0);
    const handleClickNext = () => {
        index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
    };
  return (
    <PageSection
    name="Estado del arte"
    title="Estado Del Arte "
    
  >
<div className="flex  justify-center items-center  md:gap-20 gap-4 mx-8">
          
            
           
          <button className="flex  items-center justify-center  " onClick={handleClickPrev}>
                  <GrLinkPrevious size={40} fill={"#173557"} />
              </button>
          <img
              src={ARRAY_IMG[index]}
             /*  className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer rounded-md  2xl:max-h-[500px]" */
              className="rounded-lg shadow-xl shadow-black object-cover md:h-[500px] h-[300px] "
          />
          
              
              <button
                  className=" flex  items-center justify-center"
                  onClick={handleClickNext}
              >
                  <GrLinkNext size={40} fill={"#173557"} />
              </button>
         
         
        
      </div>
    </PageSection >

  )
}

export default StateArt

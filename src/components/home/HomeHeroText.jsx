import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-44 lg:mt-0  pt-5 text-cenetr '>
  <div className='lg:text-[6.5vw] text-[12vw] flex justify-center uppercase lg:leading-[8vw]  leading-[12vw] text-white '>L'étincelle</div>
   <div className='lg:text-[6.5vw] text-[12vw] flex justify-center uppercase lg:leading-[8vw] leading-[12vw] text-white'>qui<div className='h-[6.5vw] mt-2 w-[16vw]  rounded-full overflow-hidden'><Video/></div>génère</div>
   <div className='lg:text-[6.5vw] text-[12vw] flex justify-center uppercase lg:leading-[8vw] leading-[12vw] text-white'>la créativité</div>





    </div>
  ) 
}

export default HomeHeroText
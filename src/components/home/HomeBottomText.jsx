import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
      {/* <p className='&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  absolute lg:w-[17vw] w-72 lg:right-20 right-0 lg:bottom-60 bottom-20 lg:leading-relaxed leading-tight font-[font1] text-xl text-white'>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p> */}
        <div className= 'border-white rounded-full uppercase lg:border-5  border-2 flex items-center lg:h-24 lg:px-10 px-2 pt-2 hover:border-[#F0FF7C]'>
 <Link className="text-[5.5vw]  text-white hover:text-[#F0FF7C]" to='/projects '>Projects</Link>
        </div>
  <div className='border-white rounded-full uppercase lg:border-5  border-2 flex items-center lg:h-24 lg:px-10 px-2 pt-2 hover:border-[#F0FF7C]'> 
  <Link className="text-[5.5vw]   text-white  hover:text-[#F0FF7C] " to='/agence'>Agence</Link>


  </div>
 


    </div>
  )
}

export default HomeBottomText
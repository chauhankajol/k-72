import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
 <div className="w-full h-[700px] flex ">
        <div className=" group relative w-1/2 h-full  transition-all rounded-none hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.image1} />
        <div className=" opacity-0  transition-all group-hover:opacity-100 top-0 left-0 absolute h-full w-full bg-black/10 flex items-center justify-center">
            <h1 className="text-6xl font-[font-1] border-2 rounded-full text-white p-4">VOIR LE PROJET</h1>
        </div>
        
        </div>
         
         <div className=" group relative w-1/2 h-full  transition-all rounded-none hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.image2}/>
        <div className=" opacity-0  transition-all group-hover:opacity-100 top-0 left-0 absolute h-full w-full bg-black/10 flex items-center justify-center">
            <h1 className="text-6xl font-[font-1] border-2 rounded-full text-white p-4">VOIR LE PROJET</h1>
        </div>
        
        </div>

    </div>




    </div>
  )
}

export default ProjectCard
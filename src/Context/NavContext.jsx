import React, { createContext, useState } from 'react'
 
 export const Navbarcontext=createContext()
const NavContext = ({children}) => {
      const[navopen, setNavopen]=useState(false)
    
  return (
    <Navbarcontext.Provider value={[navopen,setNavopen]}>
       <div>{children}</div>
    </Navbarcontext.Provider>
   
  )
}

export default NavContext
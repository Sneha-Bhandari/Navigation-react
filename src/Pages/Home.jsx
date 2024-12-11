import React from 'react'
import { useState } from 'react'
const Home = () => {
const[abc, setAbc]= useState(false)
function CheckBoolean(){
  setAbc(!abc);
}

  return (
    <div className='flex gap-6 p-5'>
      
       <div className={` fixed ${abc? "translate-y-10": "-translate-y-96"} top-0 left-0 w-fit h-fit p-10 right-0 mx-auto bg-orange-700 transition-all ease-in-out delay-75 duration-1000 `}>
        Sneha
      </div>
     
       <button  onClick={()=>CheckBoolean()} className={`${abc? "bg-slate-500": "bg-amber-300 "}transition-all ease-in-out delay-75 duration-1000`}>Click me</button>
    
   </div>
  
  )

}

export default Home

import React from 'react'
import { useState } from 'react'
const Home = () => {

  

//   const [abc, setAbc]= useState(0)
// function Increment(){
// setAbc(abc+1)
// }
//  function Decrement(){
// const result= (abc-1);
// if (result<0){
//   alert("Number less than 0 is not accepted")
// }else{
//   setAbc(abc-1);
// }
// }

//   return (
//     <div className='flex gap-6 p-5'>
//       {
//       abc
//        }
     
     
//     <button onClick={()=> Increment()} className='bg-green-200 h-12 w-36 rounded-md'>Increment</button>
//     <button onClick={()=> Decrement()} className='bg-red-500 h-12 w-36 rounded-md'>Decrement</button>
//    </div>
  
//   )


// smoothing the slides using usestate

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

import React from 'react'
 import { useState } from 'react'

const About = () => {
  const[topslide, setTopSlide]= useState(false)
  function CheckBoolean1(){
    setTopSlide(!topslide);
  }
  const[buttomslide, setButtomSlide]= useState(false)
  function CheckBoolean2(){
    setButtomSlide(!buttomslide);
  }

  const[leftslide, setLeftSlide]= useState(false)
function CheckBoolean3(){
  setLeftSlide(!leftslide);
}

const[rightslide, setRightSlide]= useState(false)
function CheckBoolean4(){
  setRightSlide(!rightslide);
}

  return (
    <div className='flex gap-6 p-5 '>
      <div className=''>
    <div className={` fixed buttom-0 ${topslide? "translate-y-10 ": "-translate-y-96"} buttom-0 w-fit h-fit p-10 right-1/2 mx-auto bg-orange-500 transition-all ease-in-out delay-75 duration-1000 `}>
     Came from top

   </div>
    <button  onClick={()=>CheckBoolean1()} className={`${topslide? "bg-pink-500": "bg-green-400 "}transition-all ease-in-out delay-75 duration-1000`}>Top</button>

      </div>

      <div className=''>
    <div className={` fixed ${buttomslide? "translate-y-0": "translate-y-96"} top-1/2  w-fit h-fit p-10 right-1/2 mx-auto bg-orange-500 transition-all ease-in-out delay-75 duration-1000 `}>
     Came from buttom
   </div>

    <button  onClick={()=>CheckBoolean2()} className={`${buttomslide? "bg-slate-500": "bg-amber-300 "}transition-all ease-in-out delay-75 duration-1000`}>Down</button>

      </div>


  <div className=''>
    <div className={` fixed  ${leftslide? "translate-x-0": "-translate-x-96"} right-x-0 w-fit h-fit top-1/2 p-10 mx-auto bg-orange-500 transition-all ease-in-out delay-75 duration-1000 `}>
     Came from left

   </div>
    <button  onClick={()=>CheckBoolean3()} className={`${leftslide? "bg-pink-500": "bg-red-600 "}transition-all ease-in-out delay-75 duration-1000`}>Left</button>

  </div>

  <div className=''>
    <div className={` fixed right-0 ${rightslide? "translate-x-0 ": "translate-x-96"} left-x-0 top-1/2 w-fit h-fit  p-10 mx-auto bg-orange-500 transition-all ease-in-out delay-75 duration-1000 `}>
     Came from right

   </div>
    <button  onClick={()=>CheckBoolean4()} className={`${rightslide? "bg-pink-500": "bg-blue-600 "}transition-all ease-in-out delay-75 duration-1000`}>right</button>

  </div>
 
</div>
  )
}

export default About

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
  
//   const images=[
//     'https://i.pinimg.com/474x/53/6d/53/536d53c303372028262f2c4dce22fb5d.jpg',
//     'https://i.pinimg.com/474x/45/77/9d/45779d5a5247f91e57529ddb857269a5.jpg',
//     'https://i.pinimg.com/474x/0b/af/2d/0baf2dc1146fa3d464381b1b1cb95e5f.jpg',
//     'https://i.pinimg.com/474x/ce/ad/af/ceadafcdb609fceced702a091b160aed.jpg'
// ];


// const[slide, setSlide]= useState(0)
// function nextInd(){
//   if(images.length-1==slide){
//     setSlide(0)
//   }else{

//     setSlide(slide+1)
//   }
// }

// function prevInd(){
//   if(slide==0){
//     setSlide(images.length-1)
//   }else{
//     setSlide(slide-1)
//   }
// }

// // useEffect(() => {
// //   let interval;

// //   interval=setTimeout(() => {
// //     nextInd()
// //   }, 2000);

// //   return () => {
// //     clearTimeout(interval)
// //   }
// // }, [slide])

// return (
//     <div>



//   <div className='flex flex-row relative overflow-clip w-screen h-lvh'>
//         <div onClick={()=>{prevInd()}}className='text-6xl absolute bg-white z-10 top-0'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="currentColor" d="M25.3 34.7L15.6 25l9.7-9.7l1.4 1.4l-8.3 8.3l8.3 8.3z"/><path fill="currentColor" d="M17 24h17v2H17z"/></svg></div>
//         <div>
//           {
//             images.map((val,i)=>{
//               return(

//                 <img src={val} alt="" className={`h-100  absolute ${i==slide?"translate-x-0":i>slide?"translate-x-[10000px]":"-translate-x-[10000px]"} transition-all delay-75 duration-1000 ease-in-out top-0 w-screen`}/>
//               )
//             })
//           }
//           </div>
//         <div onClick={()=>{
//           nextInd()
//         }} className='text-6xl absolute bg-white right-0'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"/><path fill="currentColor" d="M16 24h17v2H16z"/></svg></div>
//     </div>
// </div>

  )

}


export default Home

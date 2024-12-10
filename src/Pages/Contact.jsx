import React, { useState } from 'react'

const Contact = () => {
  const[click, setClick]=useState(false)
  function clicking(){
    setClick(!click)
  }
  return (
    <div>
      <div className=''>

      <div className='p-10 w-fit'>
        <button onClick={()=>clicking()} className={`${click? "w-96": "w-44"} transition-all ease-in-out delay-75 duration-1000 bg-gray-500`}>Click me</button>
      </div>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'

import {useState} from 'react'

const Demo = () => {
  const[password, setPassword]=useState('')
  const[username, setUsername]=useState('')
  const[email, setEmail]=useState('')

  function Submit(){
    alert(username+ ' '+ password+' '+email);
  }

  function password1(){
    setPassword(!password);
  }

  function email1(){
    setEmail(!email);
  }
  return (
    
    // <div className=''>

    // <div className='flex flex-col gap-2 p-2  items-center'>

    //   <div className='border-b-4 flex gap-2 mx-3 my-2 ' >
    //   <div>
    //     <h1>Username:</h1>
    //   </div>
    //   <div>
    //     <input type="text" name="username" id="username" placeholder='enter your username' />
    //   </div>
    //   </div>

    //   <div  className='border-b-4 flex gap-2 mx-3 my-2 '>
    //   <div>
    //     <h1>Password:</h1>
    //   </div>
    //   <div>
    //     <input type="password" name="password" id="password" placeholder='enter your password' />
    //   </div>
    //   </div>

    //   <div  className='border-b-4 flex gap-2 mx-3 my-2'>
    //   <div>
    //     <h1>Address:</h1>
    //   </div>
    //   <div>
    //     <input type="text" name="address" id="address" placeholder='enter your address' />
    //   </div>
    //   </div>

    //   <div  className='border-b-4 flex gap-2 mx-3 my-2'>
    //   <div>
    //     <h1>Contact:</h1>
    //   </div>
    //   <div>
    //     <input type="number" name="phone" id="phone" placeholder='enter your phone' />
    //   </div>
    //   </div>

    //   <div className=' bg-gray-600  '>
    //     <button className='w-fit p-5 h-fit '>Submit</button>
    //   </div>
    // </div>
    // </div>


    <div className="h-lvh flex items-center justify-center bg-gray-400  ">
        <div className="flex flex-col items-center gap-4 bg-purple-300 border-4 border-gray-300">
          <div>
            <h6 className="items-center text-3xl m-2 text-blue-700">SignUp here!!</h6>
          </div>

<div className="flex flex-col gap-1 ">

          <div className="flex flex-row gap-0 mx-3 my-5">
            <div>
              <h1 className=" ">Username:</h1>
            </div>
            <div className="">
              {/* {username} */}
              <input
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
                type="text"
                name="username"
                id="username"
                placeholder="Enter your name"
              />
            </div>
            </div>
            <div className="flex flex-row gap-2 mx-3 my-5">
            <div className="text-l">
              <h1>Password:</h1>
            </div>
            <div className=" text-l">
              <input
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
                className="border-none outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex flex-row gap-9 mx-3 my-5">
            <div>
              <h1 className=" ">Email:</h1>
            </div>
            <div className="">
              <input
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
                type="email"
                name="Email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
</div>
          <div className="flex gap-0 flex-col">
            <button onClick={()=>Submit()}className=" border-none w-24 h-10  text-white capitalize rounded-xl bg-green-600 items-center m-8">
              Submit
            </button>

            

</div>
        </div>
      </div>
  )
}

export default Demo

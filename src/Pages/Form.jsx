import React from "react";
import {useState} from 'react'

const Form = () => {
    const[username, setUsername]=useState('')
    const[password, setPassword]=useState('')
    const[address, setAddress]=useState('')

    function Submit1(){
        alert(username+ ' '+ password+' '+address);
      }
    
      
    

  return (
    <div className="flex flex-col gap-1 items-center justify-center bg- h-lvh ">
      <div className=" border w-4/12 rounded-xl  shadow-xl flex flex-col  h-auto p-8 gap-5 ">
        <div className="text-3xl font-semibold w-full">
          <h1 className="">Login Here!!</h1>
        </div>
        <div className="flex  w-full flex-col gap-2">
            <h1>Username:</h1>
            <input
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
              type="text"
              name="username"
              placeholder="Enter your name"
              className="bg-gray-300 py-3 rounded-md bg-transparent border outline-none border-gray-300 px-4 border-b  "
            />
        </div>

        <div className="flex w-full  flex-col gap-2">
            <h1>Password:</h1>
            <input
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
              type="password"
              name="password"
              placeholder="Enter your password"
              className="bg-gray-300 py-3 rounded-md bg-transparent border outline-none border-gray-300 px-4 border-b"
            />
        </div>

        <div className=" gap-2 w-full  flex-col flex">
            <h1>Address:</h1>
            <input
            onChange={(e)=>{
                setAddress(e.target.value)
              }}
              type="text"
              name="address"
              placeholder="Enter your address"
              className="bg-gray-300 py-3 rounded-md bg-transparent border outline-none border-gray-300 px-4 border-b"
            />
        </div>

          <button onClick={()=>Submit1()} className="w-fit h-fit shadow-md px-10 py-2 bg-green-500 rounded-md text-white">Submit</button>
      </div>
    </div>
  );
};

export default Form;

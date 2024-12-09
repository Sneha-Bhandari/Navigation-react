import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Model from '../UI/model'

const Header = () => {

  const[LoginShow, setLoginShow]= useState(false) 
  return (
    <div className='bg-black flex gap-6 px-3 py-2 text-xl text-white items-center justify-between'>
          <Model  LoginShow={LoginShow} setLoginShow={setLoginShow}>
            <div className='w-96'>
              <div>
               Login
              </div>

              <div>
                <div>
                  <input type="text" name="email" id="email"/>
                  <input type="password" name="password" id="" />
                </div>
              </div>
            </div>
          </Model>
       <div className='p-4 '> 
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path fill="currentColor" d="M23.934 18.947c-.598 1.324-.884 1.916-1.652 3.086c-1.073 1.634-2.588 3.673-4.461 3.687c-1.666.014-2.096-1.087-4.357-1.069c-2.261.011-2.732 1.089-4.4 1.072c-1.873-.017-3.307-1.854-4.381-3.485c-3.003-4.575-3.32-9.937-1.464-12.79C4.532 7.425 6.61 6.237 8.561 6.237c1.987 0 3.236 1.092 4.879 1.092c1.594 0 2.565-1.095 4.863-1.095c1.738 0 3.576.947 4.889 2.581c-4.296 2.354-3.598 8.49.742 10.132M16.559 4.408c.836-1.073 1.47-2.587 1.24-4.131c-1.364.093-2.959.964-3.891 2.092c-.844 1.027-1.544 2.553-1.271 4.029c1.488.048 3.028-.839 3.922-1.99"/></svg>
     
      </div>

      <Link to="/home"> Home</Link>
      
      <Link to="/about"> About</Link>
      
      <Link to="/contact"> Contect</Link>

    <div className='flex gap-4'>
      <button onClick={()=>{
        setLoginShow(true)

      }}>Login</button>
      <button>Registration</button>
    </div>
      
    </div>
  )
}

export default Header

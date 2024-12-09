import React, { Children } from 'react'

const Model = (LoginShow, setLoginShow, children) => {
  return (
    <div className='relative'>
     {/* * <div className='fixed bg-green-200 h-fit w-fit p-8 top-0 right-0 mx-auto border '>
        <div>
            {children}
        </div>
        <div onClick={()=> {
            setLoginShow(false)
        }}>
            X
        </div>
      </div> */}
    </div>
  )
}

export default Model

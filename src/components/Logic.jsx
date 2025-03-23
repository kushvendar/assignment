import React, { useState } from 'react'

const Logic = () => {
    const[color,setColor]=useState(true)

  return (
    <div>
      <div className='grid grid-cols-3 w-40'>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      </div>
      <div className='grid grid-cols-3 w-40'>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      </div>
      <div className='grid grid-cols-3 w-40'>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      <div onClick={()=>setColor(false)} className={`w-12 h-12 border ${color ? "bg-white" : "bg-green-500"}`}>1</div>
      </div>
    </div>
  )
}

export default Logic

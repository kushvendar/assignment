import React, { useState } from 'react'
import './App.css'
function App() {
  // created an 2-d array to store white color
  const [box,setBox]=useState(Array(9).fill('white'));

  // created an array to store boxes clicked
  const[order,setOrder]=useState([])

  // on clicking the box marking box green and saving the index in order array
  const handleClick=(idx)=>{
    if(box[idx]==='white'){
      const newbox=[...box]
      newbox[idx]='green'
      setBox(newbox)
      setOrder([...order,idx])
    } 
    if(idx===8){
      // function to create a new set of array with color orange sequence
      clickedLastBox([...order,idx])
    }
    
  }

  // when clicked on last box taking the idx from the order array and changing them to orange and added a time delay to show to effect 
  const clickedLastBox=(order)=>{
      order.forEach((idx,i) => {
        setTimeout(()=>{
          setBox((oldBox)=>{
            const newBox=[...oldBox]
            newBox[idx]='orange';
            return newBox
          })
        },i*500)
      });
  }

  return (
    // using grid layout as it suited good and now creating a div for every element with the color stored in box array in addition to tailwind using sytle attritute to bind the logic
    <div className='grid grid-cols-3 gap-2 w-40 mx-auto mt-50 '>
       {box.map((color,idx) => (
      <div
        key={idx}
        className="w-12 h-12 border cursor-pointer"
        style={{ backgroundColor: color }}
        onClick={() => handleClick(idx)}
      />
    ))}
    </div>
  )
}

export default App
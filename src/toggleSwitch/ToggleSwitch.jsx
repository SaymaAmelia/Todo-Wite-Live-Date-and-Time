import React, { useState } from 'react'
import "./Toggle.css"

const ToggleSwitch = () => {
 const [isOn , setisOn] = useState(false);
 const handleClick=()=>{
  setisOn(!isOn)
 }

  return (
    <div className='main'
    style={{backgroundColor:isOn? "green" : "red"}}
    
    onClick={handleClick} >

      <div className={`curcle ${isOn? "Start" : "Close"}`}>
        <span >
         {isOn?"On" :"Off"}
        </span>
      </div>
    </div>
  )
}

export default ToggleSwitch
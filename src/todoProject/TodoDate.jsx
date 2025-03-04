import React, { useEffect, useState } from 'react'

const TodoDate = () => {

    const [dateTime, setDateTime]= useState("");
    useEffect (()=>{
      
        const interval =   setInterval(() => {

         const now = new Date()
         const formattedDate = now.toLocaleDateString();
         const formattedTime = now.toLocaleTimeString();
         setDateTime(`${formattedDate} - ${formattedTime}`);
         
     },1000);
     
     return()=>clearInterval(interval)

 },[])



  return (
    <div>{dateTime}</div>
  )
}

export default TodoDate
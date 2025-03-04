// import React, { useEffect, useState } from 'react'

// const Priace = () => {

//   const [inputValue, setInputValue] =  useState ("")
//   const [task , setTask] =useState([])
//   const [dataTime, setDateTime] = useState("")
//   const handleInput = (event)=>{
//     setInputValue(event.target.value)
   
//   }   
 

//   useEffect(()=>{
//     const Interval= setInterval(()=>{
//       const now = new Date()
//       const formatedDate = now.toLocaleDateString()
//       const formatedTate = now.toLocaleTimeString()
//       setDateTime(`${formatedDate} - ${formatedTate}`)
//     },1000)
//     return ()=>clearInterval()

//   },[])



// const handleFormSubmit = (event)=>{
//   event.preventDefault()
//   if(!inputValue)return
//       if(task.includes(inputValue)){
//         setInputValue("")
//         return
//       }
//   setTask((prevTask) =>[...prevTask, inputValue])
//   setInputValue("")
 
// }
//   return (
//     <section className='w-[400px] h-[800px] bg-red-100'>
//       <main>
//         <h1 className='text-center'>Todo Lest</h1>
//         <br />
//         <br />
//         <h2>{dataTime}</h2>
//       </main>
//       <section className='text-center'>
//         <form action="" onSubmit={handleFormSubmit}>
//         <input type="text" 
//         placeholder='type someting'
//         value={inputValue}
//         onChange={handleInput}
//         autoComplete='off'
//         />
//         <button>add</button>
//         </form>
//       </section>
//      <section>
//       <ul>
//       {task.map((curTask, index)=>{
//           return <li key={index}>
//               <span>{curTask}</span>
             
//           </li>
//         })
//       }
//       </ul>
//      </section>
//     </section>
//   )
// }

// export default Priace
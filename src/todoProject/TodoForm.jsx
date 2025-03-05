import React, { useState } from 'react'


const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue]=useState({})

    const handleInputChange = (value)=>{
        setInputValue({id: value, content: value, checked:false})
    }   
    
    const handleFormSubmit = (event)=> {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:'', content:'', checked:false})
    }

  return (
   <section className='form flex flex-col items-center justify-center'>
   
           <form className='flex gap-[30px]  h-13 bg-white shadow-2xl' onSubmit={handleFormSubmit} >
               <div>
                   <input type="text" className='todo-input border p-3 outline-none border-none'
                    placeholder='write something....'
                    autoComplete='off'
                    value={inputValue.content}
                    onChange={(event)=>handleInputChange(event.target.value)}
                    
                    />
               </div>
               <div >
                   <button className='todo-btn text-2xl w-full h-full bg-blue-200 p-3' type='submit'>
                       Add Task
                   </button>
               </div>
           </form>
           
       </section>
  )
}

export default TodoForm
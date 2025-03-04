import React, { useState } from 'react'
import '../todoProject/todo.css'

// for React Icon

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';



const Todo = () => {
    
  
    const [task, setTask] =useState([])
    
   
    
     
    const handleFormSubmit =(inputValue)=>{
      
      if(!inputValue)return;
      if(task.includes(inputValue)){return}
      setTask((prevTask) =>[...prevTask, inputValue])
      
    }
    
    // for delete function 
    const handleTodoDelete = (value)=>{
        console.log(task)
        console.log(value)
        const updatedTask = task.filter((curTask)=>curTask !== value)
        setTask(updatedTask)
           
    }
   const handleClearTodoData =()=>{
    setTask([]);
   }
  


  return (
    
    <section className='todo-contaiter flex items-center flex-col shadow-sm  '>
    <main className='  h-[100vh] w-[50%] shadow shadow-gray-800 rounded-md  p-5'>
    <header className='pt-[100px] pb-7 flex flex-col justify-center items-center'>
        <h1  >Todo Lest</h1>
        <TodoDate/>
    </header>
    
    <TodoForm onAddTodo={handleFormSubmit} />

    <section className='UnolderList flex flex-col items-center justify-center'>
        <ul>
           {
            task.map((curTask , index) =>{
                return(
                   <TodoList
                   key={index}
                   data={curTask}
                   onHandleDeleteTodo= {handleTodoDelete}
                   />
                )
                  }
                  )
           }
        </ul>

    </section>

    <section className='text-center h-8 pt-1 border border-fuchsia-100 rounded-2xl' onClick={handleClearTodoData} >Clear all</section>
    </main>
   </section>
  )
}

export default Todo
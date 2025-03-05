import React, { useState } from 'react'
import '../todoProject/todo.css'

// for React Icon

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';



const Todo = () => {
    
  
    const [task, setTask] =useState([])
    
   
    
     
    const handleFormSubmit =(inputValue)=>{
      const{id, content, checked} = inputValue;
      // to check if the input is empty or not
      if(!inputValue)return;
      // to check if the input is already exist or not
      // if(task.includes(inputValue)){return}
      const ifTodoContentMatch = task.find((curTask)=>curTask.content === content);
      if(ifTodoContentMatch){return};

      setTask((prevTask) =>[...prevTask,{id,content, checked}])  
      
    }
    // todo add data to Locals storage
    localStorage.setItem("reactTodo", JSON.stringify(task))
    
    // for delete function 
    const handleTodoDelete = (value)=>{
        const updatedTask = task.filter((curTask)=>curTask.content !== value)
        setTask(updatedTask)
           
    }
    // for checked function
    const handleCheckedTodo = (content)=>{
     const updatedTask = task.map((curTask)=>{
       if(curTask.content === content){
         return {...curTask, checked: !curTask.checked}
       }
       return curTask
     })
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
            task.map((curTask) =>{
                return(
                   <TodoList
                   key={curTask.id}
                   data={curTask.content}
                   checked={curTask.checked}
                   onHandleDeleteTodo= {handleTodoDelete}
                   onHandleCheckedTodo={handleCheckedTodo}
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
import React from 'react'
import "../todoProject/todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const TodoList = ({data,checked, onHandleDeleteTodo, onHandleCheckedTodo}) => {
  return (
    <li className='rima w-103 h-10 my-2  flex text-xl ' >
    <span className={checked?"checkList":"notCheklist"}>{data}</span>
    <button className='w-1/12   font-extrabold p-1 mr-1' onClick={()=>onHandleCheckedTodo(data)} ><MdCheck />
    </button>
    <button className='w-1/12  font-extrabold p-1 mr-1' onClick={()=>onHandleDeleteTodo(data)} ><MdDeleteOutline /></button>

</li>
  )
}

export default TodoList
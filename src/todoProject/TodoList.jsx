import React from 'react'
import { MdCheck } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const TodoList = ({key, data, onHandleDeleteTodo}) => {
  return (
    <li className='w-103 h-10 my-2  flex text-xl ' key={key}>
    <span className='w-10/12 p-3 flex items-center  mr-1 rounded-l-xl'>{data}</span>
    <button className='w-1/12   font-extrabold p-1 mr-1'><MdCheck />
    </button>
    <button className='w-1/12  font-extrabold p-1 mr-1' onClick={()=>onHandleDeleteTodo(data)} ><MdDeleteOutline /></button>

</li>
  )
}

export default TodoList
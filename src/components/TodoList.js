import React from 'react'

function TodoList(props) {
  return (
    <li>
     {props.item}
       <span className='icons'>
        <i className="fa-regular fa-trash-can delete " onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
    
  )
}

export default TodoList

import React, { useState } from 'react'

function TodoInput(props) {
  const[inputText , setInputText] = useState('');
  const handleEnterPress = (e)=>{
    if(e.keyCode === 13){
      props.addList(inputText)
      setInputText("")
    }
  }
  return (
    <div className='input-container'>
      <input type="text"
      className='inputbox-todo'
      placeholder='Enter your input here...'
      value={inputText}
      onChange={e=>{
           setInputText(e.target.value)
      }} 
      onKeyDown={handleEnterPress}
      />
       <button className='add-btn' onClick={()=>{
        props.addList(inputText)
        setInputText("")
       }}><b>Add+</b></button>
      
      
    </div>
  )
}

export default TodoInput


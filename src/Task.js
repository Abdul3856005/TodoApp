import React from 'react'
import './Task.scss'

function Task({title, description, onDelete}) {

  const handleDelete = () =>{
    onDelete();
  }

  return (
    <div className='task'>
    <div>
    <p>{title}</p>
    <span>{description}</span>
    </div>
      <button className='btn btn-dark' onClick={handleDelete} style={{paddingBottom:'12px'}}>-</button>
    </div>
  )
}

export default Task

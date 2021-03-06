import React from 'react'
import './comment.css'

const Comment = (props) => {
  return (
    <>
      <div>
        <div className='comment'>
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{props.date.toString()}</p>
          <p>{props.message}</p>
          <button onClick={props.onRemove}>&times;</button>
        </div>
      </div>
    </>
  )
}

export default Comment
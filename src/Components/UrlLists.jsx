import React from 'react';
import './UrlLists.css'

const UrlLists = (props) => {

const editDetails =() =>{
    const editData = {
        name:props.name,
        url:props.url
    }
    props.onEdit(editData)
}

  return (
    <div className='lists'>
     
      <div>{props.name}</div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a>

      <button>Delete</button>
      <button onClick={editDetails}>Edit</button>
    </div>
  )
}

export default UrlLists

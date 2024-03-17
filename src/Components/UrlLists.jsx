import React from 'react';
import './UrlLists.css'

const UrlLists = (props) => {

const editDetails =() =>{
    const editData = {
        id:props.id,
        name:props.name,
        url:props.url
    }
    props.onEdit(editData)
}

const deleteHandler = () =>{
  const deleteData = {
    id:props.id,
    name:props.name,
    url:props.url
}
props.onRemove(deleteData)
}

  return (
    <div className='lists'>
     
      <div>{props.name}</div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a>

      <button onClick={deleteHandler}>Delete</button>
      <button onClick={editDetails}>Edit</button>
    </div>
  )
}

export default UrlLists

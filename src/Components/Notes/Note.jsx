import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    function handleDelete(){
        props.onDelete(props.id);
    }
  return (
    <div>
        <h1>{props.topic}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}><DeleteIcon/></button>
      
    </div>
  )
}

export default Note

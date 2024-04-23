import React, { useState } from 'react'
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Create.css';

const Create = (props) => {
    const [note, setNote]=useState({
        topic:"",
        content: "",
    });

    const [isExpand, setExpand] = useState(false);

    function expand(){
        setExpand(true);
    }

    function suBmit(event){
        event.preventDefault();
        props.onAdd(note);
    }

    function handleChange(event){
        const {name, value} = event.target;
        setNote(function(arg){
            return{
                ...arg,
                [name]:value,
            }
        })
    }

  return (
    <div className='main-div'>
        <form className='form-div'>
            {isExpand && <input
            type="text"
            value={note.topic}
            name="topic"
            id=''
            placeholder='Type here...'
            onChange={handleChange}
            required />}

            <textarea
            name="content"
            value={note.content}
            placeholder='Take a note...'
            id=""
            cols="30"
            rows={isExpand? 5:1}
            onClick={expand}
            onChange={handleChange}
            ></textarea>

            <Zoom in={isExpand}>
                <Fab onClick={suBmit}>
                    <AddIcon/>
                </Fab>
            </Zoom>
        </form>

    </div>
  )
}

export default Create

import { useState } from 'react';
import './App.css';
import Create from './Components/CreateArea/Create';
import Note from './Components/Notes/Note';



function App() {

  const [notes, setNotes]=useState([])

  function addNote(newN){
    setNotes(para =>{
      return [...para, newN]
    })
  }

  function handleDelete(id){
    setNotes(para =>{
      return para.filter((each, index)=>{
        return index!== id;
      })
    })
  }

  return (
    <div className="App">
     <Create onAdd={addNote}/>
     {notes.map((eachItem,index)=>{
      return (
        <Note
        key={index}
        id={index}
        topic={eachItem.topic}
        content={eachItem.content}
        onDelete={handleDelete}
        />
      )
     })}
     
    </div>
  );
}

export default App;

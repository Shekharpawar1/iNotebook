import React,{useContext} from 'react'
import {NoteContext} from "../context/NotesContext"
import NotesItems from './NotesItems';


function Notes() {
  const context=useContext(NoteContext);
  const {notes,setNotes}=context;
  return (
      <>
        <div className='container'>
          <div className='row'><h1 className='text-center'> Your Notes</h1>
        {notes.map((note)=>{
          return <NotesItems note={note}/>
          })}</div>
        
        </div>
    
    </>
  )
}

export default Notes




import React from 'react'


function NotesItems(props) {
    const{note}=props;
    return (
    <>
   
            <div className="card  col-md-2 my-3 mx-3">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">tags: {note.tages}</h6>
              <p className='card-tag'></p>
              <p className="card-text">{note.description}</p>
             
            </div>
          </div>
          
  
    </>
  )
}

export default NotesItems
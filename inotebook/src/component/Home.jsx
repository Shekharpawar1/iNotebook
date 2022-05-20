import React from 'react'

import Notes from './Notes';


function Home() {
  
  return (
    <>
      <div className="container my-3">
        <h1 className='text-center'>Add Notes</h1>
        <div className='form'>
        <form className='my-3'>
          <div className="form-group my-3">
            <label htmlFor="title">title</label>
            <input type="email" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title"/>
   
          </div>
          <div className="form-group my-3">
            <label htmlFor="Tags">Tags</label>
            <input type="email" className="form-control" id="Tags" aria-describedby="emailHelp" placeholder="Enter tag"/>
            <small id="tagsHelp" className="form-text text-muted">This is optional</small>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1 ">Description</label>
            <textarea className="form-control" row="8" placeholder='Enter description'></textarea>
            
          </div>
          
          <button type="submit" className="btn btn-lg btn-primary my-3">submit</button>
        </form>
        </div>
      </div>
      <div className='row my-3'>
        <Notes/>
        
      </div>
    </>
  )
}

export default Home
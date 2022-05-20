import React from 'react'

function Home() {
  return (
    <>
      <div classNameName="container my-3">
        <h1>Add Notes</h1>
        <div classNameName='form'>
        <form className='my-3'>
          <div className="form-group my-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group my-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-group form-check my-3">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
        </div>
      </div>
      <div classNameName='container my-3'>
        <h1> Your Notes</h1>
      </div>
    </>
  )
}

export default Home
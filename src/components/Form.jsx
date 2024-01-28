import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Name</label>
            <input type="text" placeholder='enter your name'/>
            <label>Email</label>
            <input type="email" placeholder='Enter your email'/>
            <label>Subject</label>
            <input type="text" />
            <label>Details</label>
            <textarea rows='6' placeholder='Type a short message' />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
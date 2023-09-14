import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Pro = () => {
  const [profile, setprofile] = useState('')
  let email = useRef()
  let names = useRef()
  const submit = (e) => {
    e.preventDefault()
    let response = axios.post('http://localhost:4000/mail', {
      email: email.current.value,
      names: names.current.value
    })
    console.log(response);
  }

  return (
    <>
      <div className='container p-4 mt-4'>
        <div className='card p-5'>
          <form action="">
            <div className='form-group'>
              <input type="text" className='form-control' name='names' ref={names} />
              <label htmlFor="">Name</label>
            </div>
            <div className='form-group'>
              <input type="text" className='form-control' name='email' ref={email} />
              <label htmlFor="">Email</label>
            </div>
            <button onClick={submit}>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Pro
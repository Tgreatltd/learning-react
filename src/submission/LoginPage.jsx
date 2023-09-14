import React, { useRef, useState } from 'react'
import api from '../service/api'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [errors, seterrors] = useState()
    let email = useRef()
    let password = useRef()
    let navigate = useNavigate()
    const submit = async (e)=>{
     e.preventDefault()

     try {
       let response= await api.post('login',{email:email.current.value, 
        password:password.current.value})
        console.log(response.data);
        let {status,token,user}=response.data
        if (status=='ok') {
          localStorage.setItem('token', token) 
          localStorage.setItem('user',JSON.stringify(user)) 
          navigate('/submit')
        }
     } catch (error) {
        console.log(error);
        seterrors(error.message)
     }
    }
  return (
    <>
    <div className='conatainer p-5 mt-5 bg-light'>
        <div className='card p-5'>
          {errors && <strong className='alert alert-danger'>{errors}</strong>}
            <form action="">
                <div className='form-group'>
                <label htmlFor="" className='mt-3' >Email</label>
                <input type="text" name='email' ref={email} className='form-control mt-1' />
                </div>
                <div className='form-group'>
                <label htmlFor="" className='mt-3'>password</label>
                <input type="text" name='password' ref={password} className='form-control mt-1' />
                </div>
                <button className='bg-success form-control mt-4' onClick={submit}>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default LoginPage
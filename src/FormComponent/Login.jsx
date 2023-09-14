import React, { useRef, useState } from 'react'
import './login.css'
import axios from 'axios'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const Login = () => {
const [form, setform] = useState({})
const [errors, seterrors] = useState('')
const [invalid, setinvalid] = useState('')
const [success, setsuccess] = useState('')
let email = useRef()
let schema = yup.object().shape({
  email:yup.string().min(2,'email must be at least 2 characters').required('Email field is required'),
  password:yup.string().min(2,'password must be at least 2 characters').required('password is required'),
})
const signToServer=async()=>{
try {
  axios.defaults.headers.post['Content-Type']="application/x-www-form-urlencoded";
let response= await axios.post('http://localhost:4000/login', form)
console.log(response);
console.log(response.data);
setinvalid(response.data.error)
setsuccess(response.data.message)
} catch (error) {
  console.log(error.response);
}
}
const sign = async (e)=>{
e.preventDefault()
try {
  await schema.validate(form, {abortEarly:false});
  signToServer()
  seterrors('')
} catch (error) {
  // console.log(error);  
  let newError={}
  // console.log(error.inner);
  error.inner.forEach(e=>{
  newError[e.path]=e.message
  
  })
  seterrors(newError)
}
}
const handleTask= (e)=>{
let name=e.target.name
let value=e.target.value
setform({...form,[name]:value})
}
  return (
    <div>
        <div className='container-fluid p-5 bg-light'>
             <div id='container' className='container p-5 bg-light'>
               <div id='container2' className='card p-5 shadow '>
            <div className='alert alert-primary'>Login to your account</div>
            {invalid && <strong className='alert alert-danger'>{invalid}</strong> }
            {/* {success && <strong className='alert alert-success'>{success}</strong> } */}
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input type="text" onInput={handleTask}  className='form-control'name='email'  />
                        <small style={{color:'red'}}>{errors.email && errors.email}</small>
                    </div>
                    <div className='form-group mt-5'>
                        <input type="text" onInput={handleTask}  className='form-control'name='password' />
                        <small style={{color:'red'}}>{errors.password && errors.password}</small>
                    </div>
                    <button onClick={sign} className='form-control btn btn-primary mt-5'>Login </button>
                    {/* <Link to={'/form'}>
                    {success && <button className='btn btn-success form-control mt-3'>Continue to your profile</button> }
                    </Link> */}
                </form>
                </div>
            </div>
        </div>
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Login
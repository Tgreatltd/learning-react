import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import * as yup from 'yup'


const Forming = () => {
const [form, setform] = useState({}); 
const [errors, seterrors] = useState({})
const [success, setsuccess] = useState('')
let schema= yup.object().shape({
    first_name:yup.string().min(2,'First name must be at least 2 characters').required('First name is required'),
    last_name:yup.string().min(2,'last name must be at least 2 characters').required('last name is required'),
    email:yup.string().min(2,'email must be at least 2 characters').required('Email field is required'),
    password:yup.string().min(2,'password must be at least 2 characters').required('password is required'),
})
const handleChange=(e)=>{
let name=e.target.name
let value=e.target.value
if (e.target.name=='image') {
 value=e.target.files[0].name   
}
setform({...form, [name]:value})
console.log(form);
}
const submit=async(e)=>{
e.preventDefault()
try {
  await schema.validate(form, {abortEarly:false});
  console.log("Form Passed and about to be submitted");
  setsuccess("Form Passed and about to be submitted")
  seterrors({})
  axios.defaults.headers.post['Content-Type']="application/x-www-form-urlencoded";
  let response= await axios.post('http://127.0.0.1:4000/register',form)
  console.log(response);

} catch (error){
    let newError={};
    error.inner.forEach(e=>{
        newError[e.path]=e.message
    })
    seterrors(newError)
    
}
// console.log(form);
}
  return (
    <div>
      <div className='container bg-light p-5 '>
        <div className='card p-5 mt-3 shadow w-50 '>
            <form onSubmit={submit}>
                <div className='form-group'>
                    <label htmlFor="">First name</label>
                    <input type="text" onInput={handleChange} name='first_name' className='form-control' />
                    <small className='text-danger'>{errors.first_name && errors.first_name}</small>
                </div>
                <div className='form-group mt-2'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" onInput={handleChange} name='last_name' className='form-control' />
                    <small className='text-danger'>{errors.last_name && errors.last_name}</small>
                </div>
                <div className='form-group mt-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" onInput={handleChange} name='email' className='form-control' />
                    <small className='text-danger'>{errors.email && errors.email}</small>
                </div>
                <div className='form-group mt-2'>
                    <label htmlFor="">Password</label>
                    <input type="password" onInput={handleChange} name='password' className='form-control' />
                    <small className='text-danger'>{errors.password && errors.password}</small>
                </div>
                <div className='form-group mt-2'>
                    <label htmlFor="">Image</label>
                    <input type="file" onInput={handleChange} name='image' className='form-control' multiple/>
                </div>
                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                <h5>{success}</h5>
            </form>
        </div>

        </div>
    </div>
  )
}

export default Forming
import React, { useState } from 'react'
import * as yup from "yup"
import axios from 'axios';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Format = () => {
    const [form, setform] = useState({});
    const [errors, seterrors] = useState({})
    const [sub, setsub] = useState(false)
    let schema= yup.object().shape({
        firstName:yup.string().required('First Name is Required').min(2),
        lastName:yup.string().required('First Name is Required').min(2),
        email:yup.string().required('First Name is Required').min(2)
      })
    const  submitToServer= async()=>{
      try {
        setsub(true)
        axios.defaults.headers.post['Content-Type']="application/x-www-form-urlencoded";
        console.log('form ahve been submitted');
        let response= await axios.post('http://localhost:4000/signup', form)
        console.log(response.data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
    setsub(true)
    }


    const handleChange=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setform({...form,[name]:value})
    // console.log(form);
    }

    
    const submit= async (e)=>{
      e.preventDefault()
      console.log(form);
      try {
        await schema.validate(form, {abortEarly:false})
       submitToServer()
      } catch (error) {
        let newError={};
        error.inner.forEach(e=>{
        newError[e.path]=e.message
        })
         seterrors(newError) 
      }
      
    }
  return (
    <div>
        <div className='container bg-light p-5'>
            <div className='card  p-5 mt-5 shadow w-50'>
                <form action="" className='' onSubmit={submit}>
                    <div className='form-group '>
                        <label htmlFor=""> First name</label>
                        <input type="text" placeholder='name' name='firstName'onInput={handleChange} className='form-control ' />
                       <small>{errors.firstName && errors.firstName}</small>
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor=""> last name</label>
                        <input type="text" placeholder='last name'name='lastName'onInput={handleChange} className='form-control ' />
                        <small>{errors.lasttName && errors.lastName}</small>
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor=""> Email</label>
                        <input type="text" placeholder='email'name='email'onInput={handleChange} className='form-control ' />
                        <small>{errors.email && errors.email}</small>
                    </div>
                    
                    <button className='btn btn-primary mt-5' type='submit'>Submitit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
   
export default Format
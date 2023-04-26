import React, { useState } from 'react'
import  axios from "axios";
// import "./Fetching.css"
import { Link } from 'react-router-dom';

const Apifetching = () => {
  const [form, setform] = useState([])
  const [submitted, setsubmitted] = useState(false)
  const [you, setyou] = useState('')
  const [feed, setfeed] = useState('')
  // const [first, setfirst] = useState(second)
function handleTask(e){
  form[e.target.name]=e.target.value
setform({...form})
console.log(form);
}
const submit= async (e)=>{
  e.preventDefault()
  setsubmitted(true)
  try {
    axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'
    let response =await axios.post('http://127.0.0.1:5000/signup',form)
    let {message}= response.data
    // alert(message)
    setfeed(message)
    setyou('')
    console.log(response);
  } catch (error) {
    // alert(error.message);
    // setyou(error.response.data.error)
    setyou(error.response.data.error)
    setfeed('')
    console.log(error.message); 
    // alert(error.response.data.error);
  }
  setsubmitted(false)
}
  return (
    <div>
      <div className='container p-5 bg-light'>
        <div className='card p-5 mt-5 w-50 '>
           <form action="">
    
            <h1><Link to={'/test'}>go to about page</Link></h1>
        
              <div className='form-group mt-4'>
                <input type="text" name='name' onInput={handleTask} placeholder="Name" className='form-control'/>
             </div><br />

            <div className='form-group mt-2'>
              <input type="email" name='email' onInput={handleTask} placeholder="Email" className='form-control'/>
            </div><br />
            
           <div className='form-group mt-2'>
             <input type="password" name='password' onInput={handleTask} placeholder="Password" className='form-control'/>
           </div>
      {submitted && <h3>please wait we are submitting your form.</h3>}
      <button className='btn btn-success mt-5' onClick={submit}>Submit</button>
      <h1 className='feed'>{feed}</h1>
      <h1 className='you'>{you}</h1>
      </form>
      
      </div>
      </div>
    </div>
  )
}

export default Apifetching
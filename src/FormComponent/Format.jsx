import React, { useState } from 'react'

const Format = () => {
    const [form, setform] = useState({})
    const handleChange=(e)=>{
    let name=e.target.name
    let value=e.target.value
    setform({...form,[name]:value})
    // console.log(form);
    }
    const submit=(e)=>{
      e.preventDefault()
      console.log(form);
    }
  return (
    <div>
        <div className='container bg-light p-5'>
            <div className='card  p-5 mt-5 shadow w-50'>
                <form action="" className='' onSubmit={submit}>
                    <div className='form-group '>
                        <label htmlFor=""> First name</label>
                        <input type="text" placeholder='name' name='firstName'onInput={handleChange} className='form-control ' />
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor=""> last name</label>
                        <input type="text" placeholder='last name'name='lastName'onInput={handleChange} className='form-control ' />
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor=""> Email</label>
                        <input type="text" placeholder='email'name='email'onInput={handleChange} className='form-control ' />
                    </div>
                    
                    <button className='btn btn-primary mt-5' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Format
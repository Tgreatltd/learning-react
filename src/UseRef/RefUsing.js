import React, { useState } from 'react'
import MyFile from './MyFile'

const RefUsing = () => {
const [first, setfirst] = useState('the boy is good')
const [namee, setnamee] = useState()
const [email, setemail] = useState()
const [password, setpassword] = useState()
function name (){
  setfirst('he is very good')
}
function targ(){
    
}
function sub(){
console.log('my name is', namee);
console.log(email);
console.log(password);
}
  return (
    <div>

  <h1>{first}</h1>
  <button onClick={name}>click me</button>
  <input type="text" onChange={(e)=>console.log(e.target.value)} />
  <button onClick={targ}>click to target</button><br /><br />
  <input type="text" onChange={(e)=>setnamee(e.target.value)} />
  <input type="email" onChange={(e)=> setemail(e.target.value)} />
  <input type="password" onChange={(e)=>setpassword(e.target.value)} /><br />
  <button onClick={sub}>submit</button> <br />
  <div>{namee}</div>
 
  
  

 <MyFile/>
    </div>
  )
}

export default RefUsing
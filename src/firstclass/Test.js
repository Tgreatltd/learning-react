import React, { useState } from 'react'
import App from '../App'
import './Test.css';
import Test2 from '../Test2'
import Myclass from '../UsingEffects/Myclass';
import { Link } from 'react-router-dom';


const Test = () => {
const [name, setname] = useState('hello there')
const [great, setgreat] = useState([1,2,3,4])
console.log(name)
let see = 'i am testing'
function changeName(){
  setname('i love coding')
}
function seeArray(){
  setgreat([1,4,5,6])
}
const [me, setme] = useState('i am a CODER')
function changeMe(){
setme('CODING IS MY HOBBY')
}


  return (
    <div>
      <Link to={'/'}>go to form page</Link>
      <h2>{see}</h2>
   <h1 className='world'>hello world</h1>
   <h1>{name}</h1>
   <h4>{great}</h4>
   <h2>{me}</h2>
   <button onClick={()=> setname('i hate coding')}>click</button>
   <button onClick={changeName}>click to see</button>
   <button onClick={seeArray}>click array</button> 
   <button onClick={()=> setme('i am still learning lol')}>click to see my occupation</button>
   <button onClick={changeMe}>click here</button> 
   
   
   <Myclass/>
   <Test2 name={me}/>
  
   </div>
  )
}

export default Test
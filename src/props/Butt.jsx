import { useState } from 'react'
import Butons from './Butons'

const Butt = () => {
const [first, setfirst]= useState('this is component1')
function btn1(){
// alert('hello world1')
setfirst('i am a web Dev')
}
function btn2(){
alert('hello world2')
}
function btn3(){
alert('hello world3')
}
  return (
    <div>
        <h1>{first}</h1>
        <Butons label="click me one" color="blue" click={btn1}/>
        <h1>this is component2</h1>
        <Butons label="click me 2" color="green" click={btn2}/>
        <h1>this is component3</h1>
        <Butons label="click me 3" color="red" click={btn3}/>
    </div>
  )
}

export default Butt
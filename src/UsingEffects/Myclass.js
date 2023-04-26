import React, { useEffect, useState } from 'react'

const Myclass = () => {
const [data, setdata] = useState('')
useEffect(()=>{
    console.log('im running')
},[data ])
  
function change(){
    setdata('i love you')
    console.log(data);
    // setdata(Math.random())
}
  return (
    <div>
        <button onClick={change}>click mee</button>
    </div>
  )
}

export default Myclass
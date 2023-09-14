import React, { useEffect, useState } from 'react'

const Effecting = () => {
  const [first, setfirst] = useState('')
    useEffect(() => {
   fetch('http://localhost:4000/test')
   .then(res=>res.json())
   .then(res=>{console.log(res)
   setfirst(res.success[1].email)
  })
    }, [])
     
  return (
    <div>
      <h1>{first}</h1>
    </div>
  )
}

export default Effecting
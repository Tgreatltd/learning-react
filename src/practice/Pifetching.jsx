import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pifetching = () => {
    const [title, settitle] = useState()
    useEffect(() => {
      let response=axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c44ca267')
      console.log(response);
       }, [])

    //    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c44ca267')
    //   .then(res=>res.json())
    //   .then(res=>console.log(res))
       
   
  return (
    <>
    <button className='btn btn-success'>Submit</button>
    </>
  )
}

export default Pifetching
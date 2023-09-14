import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import './nav.css'
import api from '../service/api'




const FirstPage = () => {

  // const [user, setuser] = useState(null)

  // const getUser=async()=>{
  // try {
  //   let res= await api.get('users/profile')
  //   console.log(res)
  //   setuser(res.data.message)

  // } catch (error) {
  //   console.log(error);
  // }
  // }
  // useEffect(() => {
  //   getUser()
  // }, [user])
  
  return (
    <>
    <NavBar/>
    <div className='container-fluid' id='display'>
        <div id='side1'></div>
        <div id='content'>
        {<Outlet/>}
       </div>
        <div id='side2'></div>
       
    </div>
    </>
    
  )
}

export default FirstPage
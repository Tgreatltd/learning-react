import React, { useEffect, useState } from 'react'
import api from '../service/api'

const AboutPage = () => {
 const [user, setuser] = useState(null)

  const getUser=async()=>{
  try {
    let res= await api.get('users/profile')
    console.log(res.data.message)
    setuser(res.data.message)

  } catch (error) {
    console.log(error);
  }
  }
  useEffect(() => {
    getUser()
  }, [user])
  return (
    <>
    <h1 className='mt-4'>THIS THE ABOUT PAGE</h1>
    <h1 className='mt-4'>{user}</h1>
    </>
  )
}

export default AboutPage
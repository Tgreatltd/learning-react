import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
let {id} = useParams();    
let users=[
{name:'Teslim', id:1},
{name:'Tobi', id:2},
{name:'Jomi', id:3},
{name:'Ade', id:4}
]
let user =users.find((el)=> el.id==id)
  return (
    <div>
        <h1>This is the profile Page from user {id}</h1>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Profile
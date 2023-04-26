import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
 let users=[
{name:'Teslim', id:1},
{name:'Tobi', id:2},
{name:'Jomi', id:3},
{name:'Ade', id:4},
 ]
 let list= users.map((el)=><h1 key={el.name}>
<Link to={'/dashboard/profile/'+el.id }>{el.name}</Link>
 </h1>)
  return (
    <div>
        <h1>this is about page</h1><h1><Link to={'/'}>Go to homePage</Link></h1>
        <div>{list}</div>
    </div>
  )
}

export default About
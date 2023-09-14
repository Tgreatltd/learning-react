import React from 'react'
import { Link, Outlet ,redirect} from 'react-router-dom'
import './page.css'

const Dashboard = () => {
const options=[
{
link:"/dashboard/",
label:'Dashboard'
},
{
 link:"/dashboard/profile",
 label:'Profile'
},
{
link:"/dashboard/wallet",
label:'Wallet'
},

]

const info =options.map((el)=><li key={el.label}>
    <Link className='link' to={el.link}>{el.label}</Link>
</li>)
  return (
    <div>
    <nav className='nav'>
        <ul className='ul'>
            {info}
        </ul>
    </nav>
    <div className='container-fluid'>
        <div className='side'></div>
        <div className='content'>
            <button onClick={()=>redirect("/")}>GO home</button>
            { <Outlet></Outlet>}
        </div>
    </div>
    </div>
  )
}

export default Dashboard
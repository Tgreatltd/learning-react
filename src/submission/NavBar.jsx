import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item px-5">
      <Link to={"/submit"}>Home</Link>
      </li>
      <li className="nav-item px-5"> 
      <Link to={"/submit/second"}>SecondPage</Link>
      </li>
      <li className='nav-item px-5'>
      <Link to={'/submit/profilepage'}>ProfilePage</Link>
      </li>

      <li className='nav-item px-5'>
      <Link to={'/submit/loginpage'}>Login</Link>
      </li>
      <li className='nav-item px-5'>
      <Link to={'/submit/register'}>Signup</Link>
      </li>
      
    </ul>
  </div>
</nav>
    
    </>
  )
}

export default NavBar
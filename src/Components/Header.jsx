import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="header_main">
            <Link to="/About"><nav>ABOUT US</nav></Link>
            <Link to="/Characters/?page=1"><nav>CHARACTERS</nav></Link>
            <Link to="/"><img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="logo" /></Link>
            <Link to="/Store"><nav>STORE</nav></Link>
            <Link to="/Games"><nav>GAMES</nav></Link>
        </div>
        <div className="header_main_mobile">
            <img className='header_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="" />
            <div  className="nav_links">
            <Link to="/About"><nav>ABOUT US</nav></Link>
            <Link to="/Characters/?page=1"><nav>CHARACTERS</nav></Link>
            <Link to="/Store"><nav>STORE</nav></Link>
            <Link to="/Games"><nav>GAMES</nav></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header
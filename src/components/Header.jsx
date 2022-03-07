import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <nav classname='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <div class="navbar-brand">Note-it</div>
          <div class="navbar-nav">
            <div class="nav-item">
              <Link className ='nav-link' to={'/dashboard'} style = {{textDecoration:'none'}} >Dashboard</Link>
            </div>
            <div class="nav-item">
              <Link className ='nav-link' to={'/home'} style = {{textDecoration:'none'}} >Home</Link>
            </div>
        </div>
        </div>
      </nav>

  )
}

export default Header

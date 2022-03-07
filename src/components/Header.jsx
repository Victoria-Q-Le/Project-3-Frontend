import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className='title'>Noted</h1>
        <h1><Link className ='title' to={'/dashboard'}>Dashboard</Link></h1>
        <h1><Link className ='title' to={'/'}>Home</Link></h1>
      </nav>
    </header>
  )
}

export default Header

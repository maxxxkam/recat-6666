import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
   <>
   <header className="header">
    <div className="container">
        <nav className="nav">
            <Link to={'/'}>HOME</Link>
            <Link to={'/About'}>ABOUT</Link>
            <Link to={'contacts'}>CONTACTS</Link>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Header

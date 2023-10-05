import React, { useState } from 'react'
import Head from './Head'
import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {
  const [press, setPress] = useState(false)
  return (
    <>
    <Head/>
    <header>
      <nav className="box">
        <ul className={press ? 'mobile-nav' : 'box'} onClick={()=> setPress(false)}>
          <li><Link to='/#'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/coursesoffering'>Courses Offering</Link></li>
          <li><Link to='/training schudules'> Training Schedules</Link></li>
          <li><Link to='/career'>Career</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        <div className="start">
          <div className="button">GET CERTIFIDE</div>
        </div>
        <button className='toggle' onClick={()=> setPress(!press)}>
          { press ? <i className='fa fa-times'></i> :<i className='fa fa-bars'></i>}
        </button>
      </nav>
    </header>
    </>
  )
}

export default Header
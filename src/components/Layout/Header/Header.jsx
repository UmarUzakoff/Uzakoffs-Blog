import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <header className='header container'>
      <nav>
        <h1><NavLink to={'/'}>Uzakoff's Blog</NavLink></h1>
        <ul>
          {/* <li >
            <NavLink className={({isActive}) => (`${isActive ? 'navActive' : ''}`)} to={'/'}>Home</NavLink>
          </li> */}
          <li >
            <NavLink className={({isActive}) => (`${isActive ? 'navActive' : ''}`)} to={'/academy'}>Academy</NavLink>
          </li>
          <li >
            <NavLink className={({isActive}) => (`${isActive ? 'navActive' : ''}`)} to={'/blog'}>Blog</NavLink>
          </li>
          <li >
            <NavLink className={({isActive}) => (`${isActive ? 'navActive' : ''}`)} to={'/talks'}>Talks</NavLink>
          </li>
          <li >
            <NavLink className={({isActive}) => (`${isActive ? 'navActive' : ''}`)} to={'https://t.me/Uzakoff_u'} target="blank">Channel</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
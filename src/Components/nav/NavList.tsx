// import React from 'react'
import { Link } from 'react-router-dom'

function NavList() {
  return (
    <nav className=''>
        <ul className='flex flex-col gap-6 text-lg pt-7 font-bold text-orange-800 pb-6 md:hidden text-center'>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/AboutUs">AboutUs</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
            <li><Link to="/media">Media</Link> </li>
            <li><Link to="/sustainability">Sustainbility</Link> </li>
            <li><Link to="/Ourservices">OurServices</Link> </li>
        </ul>
    </nav>
  )
}

export default NavList ;
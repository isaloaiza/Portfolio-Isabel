import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { HoverNav } from '../HoverNav/Navelement'

export const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-20 text-black text-[25px]'>
                <HoverNav  element={<Link to="/">Home</Link>} />
                <HoverNav  element={<Link to="/about">About</Link>} />
                <HoverNav  element={<Link to="/projects">Projects</Link>} />
                <HoverNav  element={<Link to="/contact">Contact</Link>} />
                <HoverNav  element={<Link to="/skill">skills</Link>} />
                <HoverNav  element={<Link to="/Shoppin">Shoppin</Link>} />
            </ul>
            <Outlet/>
        </nav>
    )
}

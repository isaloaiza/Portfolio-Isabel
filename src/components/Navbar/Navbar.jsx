import React from 'react'
import { Navelement } from '../Navelement/Navelement'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <ul className='flex gap-20 text-black text-[25px]'>
                <Navelement element={<Link to="/">Home</Link>} />
                <Navelement element={<Link to="/about">About</Link>} />
                <Navelement element={<Link to="/projects">Projects</Link>} />
                <Navelement element={<Link to="/contact">Contact</Link>} />
                <Navelement element={<Link to="/skill">skills</Link>} />
                <Navelement element={<Link to="/Shoppin">Shoppin</Link>} />
            </ul>
            <Outlet/>
        </nav>
    )
}

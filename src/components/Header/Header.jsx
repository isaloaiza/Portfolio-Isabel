import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return (
        <div id='header' className='flex flex-row justify-between items-center px-10 text-black text-xl h-24'>
        
            <div className='flex items-center text-center gap-3'>
                <div>
                    <a href="#"><h1 className='text-pink-900 text-[24px]'>Isabel Loaiza</h1></a>
                </div>
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
    )
}
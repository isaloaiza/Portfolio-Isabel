import React from 'react'
import { SocialImages } from '../SocialImages/SocialImages'
import git from './github.png'
import instagram from './instagram.png'

export const Footer = () => {

   const social = {
        instagram: 'https://instagram.com/isabell.loaiza?igshid=MzMyNGUyNmU2YQ==',
        git: 'https://github.com/isaloaiza'
   }

    return (
        
        <div id='footer' className='float flex-col text-center items-center justify-center bg-emerald-700 text-white p-20'>
            <div id='top' className='flex flex-row justify-around'>
                <div>
                    <h4 className='text-start text-[22px]'>Isabel loaiza</h4> <br />
                    <p >A Frontend focused Web Developer building the Frontend of Websites <br /> and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h4 className='text-start text-[22px]'>SOCIAL</h4> <br />
                    </div>
                    <div className='flex flex-row gap-5 '>
                        <SocialImages href={social.git} alt='git icon' src={git}/>
                        <SocialImages href={social.instagram} alt='instagram icon' src={instagram}/> 
                    </div>
                </div>
            </div>
            <hr className='my-7 '/>
            <div id='bottom'>
                <h1>© Copyright 2023. Made by Isabel Loaiza</h1>
            </div>
        </div>
    )
}
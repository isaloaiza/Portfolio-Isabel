import React from 'react'



export const About = () => {
  return (
    <div id='about' className='w-full bg-white py-16 px-4 text-[25px]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-4 rounded-full' src='https://i.ibb.co/C7918nk/yo1.jpg' alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-pink-900  text-[20px] '>programmer in development</h1>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-emerald-700'>FrontEnd programmer</h1>
          <p>
          ¡Hola! Soy Isabel, una apasionada programadora frontend con un enfoque creativo y 
          un amor por la resolución de problemas. Mi viaje en el mundo del desarrollo web 
          comenzó con la fascinación por la intersección entre el diseño y la tecnología.
          </p>
        </div>
      </div>
    </div>
  )
};

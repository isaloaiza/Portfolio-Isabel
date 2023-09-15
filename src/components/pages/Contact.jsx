import React from 'react';
//import { Button } from '../Button/Button';

export const Contact = () => {
  return (
    <div id='contact' className='bg-gray-200 p-8 h-auto'>
      <h1 className='text-4xl font-semibold mb-4'>Contacto</h1>
      <form className='flex flex-col gap-4'>
        <label htmlFor='name' className='text-gray-600'>Nombre:</label>
        <input
          type='text'
          id='name'
          className='border rounded p-2 focus:outline-none focus:border-blue-500'
          placeholder='Ingresa tu nombre'
        />

        <label htmlFor='email' className='text-gray-600'>Correo Electrónico:</label>
        <input
          type='email'
          id='email'
          className='border rounded p-2 focus:outline-none focus:border-blue-500'
          placeholder='Ingresa tu correo electrónico'
        />

        <label htmlFor='message' className='text-gray-600'>Mensaje:</label>
        <textarea
          id='message'
          className='border rounded p-2 h-32 focus:outline-none focus:border-blue-500'
          placeholder='Escribe tu mensaje aquí'
        />

       <button className='bg-pink-900 py-1.5 h-[35px] w-[20%] text-white text-[20px]'>enviar</button>
      </form>
    </div>
  );
};


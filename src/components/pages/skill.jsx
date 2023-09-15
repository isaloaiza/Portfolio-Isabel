import { Card } from '../Card/Card'
import React from 'react'

export const Skill = () => {
  return (

    <div id='Skill' className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black text-pink-900">
        My Skills
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          
        </span>
        <p className="max-w-2xl text-center text-gray-500">
        En esta sección, te presentaré algunas de las habilidades que he
         desarrollado a lo largo de mi carrera profesional. Estas habilidades 
         son fundamentales para mi desempeño en diversas áreas y proyectos.
        </p>
        <span className="text-5xl text-primary">
          
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
       
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
          <img
            src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-pink-900 p-1 bg-white"
          />
          <img
            src="https://linube.com/blog/wp-content/uploads/sql-server-min.png"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
          />
          <img
            src="https://virtualizate.unives.mx/wp-content/uploads/2020/07/11css3.png"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
          />
          
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">HTML</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            New version
          </h5>
        </div>
      </div>
    </div>

  )
}

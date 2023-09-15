import React from 'react'

export const Projects = () => {
  return (

    <div id="projects" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black text-pink-900">
          My projects
        </h1>
        <p className="text-xl text-gray-500">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <a href="https://incredible-torte-d7ffa3.netlify.app/">
          <img
            src="https://i.ibb.co/F6zNy2M/peliculas.png"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          </a>
        
          <h3 className="text-2xl font-bold"> ITV- film platform</h3>
          <p className="text-gray-500">
          is a platform which gives us the search, filters, 
          description of movies and series, also have their trailer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <a href="https://fanciful-sorbet-e105cb.netlify.app/">
            <img
              src="https://i.ibb.co/DQPfM3P/telefono.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            </a>
            <h3 className="text-2xl font-bold">
              IOS app Atastico
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://latinlover.netlify.app/">
            <img
              src="https://i.ibb.co/bscC0KB/hoja.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            </a>
            
            <h3 className="text-2xl font-bold">
            internship project
            </h3>
          </div>
          <div className="flex flex-col gap-4">
          <a href="https://rickand-morty-phi.vercel.app/">
          <img
            src="https://i.ibb.co/rwmT0Kq/Rickand-Morty.png"
            className="w-full h-56 object-cover rounded-3xl"
          />
          </a>
            
            <h3 className="text-2xl font-bold">
            Rick and Morty
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://legendary-churros-38f3a6.netlify.app/">
            <img
              src="https://i.ibb.co/nMtQQkf/Blueasy.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            </a>
    
            <h3 className="text-2xl font-bold">
              Blueasy
            </h3>
          </div>
        </div>
      </div>
    </div>


  );
};



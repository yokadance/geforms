import Image from 'next/image'; // Import the Image component
import React from 'react';

const Hero = () => {
  return (
    <div className='relative flex justify-center items-center h-screen flex-col'>
      {/* Contenedor de la Imagen */}
      <div className='absolute top-0 left-0 w-full h-3/5 z-0'>
        <Image
          src='/images/hero.jpg'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-3/5 bg-black opacity-50 z-10'></div>
      {/* Contenido */}
      <h1 className='text-white z-20'>Bienvenido a la sección de Hotelería</h1>
    </div>
  );
};

export default Hero;

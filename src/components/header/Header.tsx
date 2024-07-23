import Image from 'next/image'; // Import the Image component
import React from 'react';

const Hero = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column', // Organiza los botones en una columna
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '60%',
        }}
      >
        <Image
          src='/images/hero.jpg'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h1 style={{ zIndex: 1 }}>
        Bienvendio a la sección de Hotelería y transporte
      </h1>{' '}
      <div style={{ marginTop: '20px', zIndex: 1 }}>
        <button className='mr-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
          Hotels
        </button>
        <button className='bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-100 transition duration-300'>
          Transfers
        </button>
      </div>
    </div>
  );
};

export default Hero;

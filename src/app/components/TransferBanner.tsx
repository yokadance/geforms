import React from 'react';


const TransferBanner = () => {
  return (
    <div className='bg-blue-500 text-white text-center p-10 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-2'>¿Necesitas un traslado?</h2>
      <p className='mb-4'>
        Ofrecemos servicios de traslado cómodos y seguros a tu destino.
      </p>
      <button className='bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300'>
        Solicitar Traslado
      </button>
    </div>
  );
};

export default TransferBanner;

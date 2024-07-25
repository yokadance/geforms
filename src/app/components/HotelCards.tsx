// components/HotelCard.js

'use client';

import Image from 'next/image';
import { Key } from 'react';

const amenitiesIcons: { [key: string]: string } = {
  Piscina: 'images/iconos/piscina.svg',
  Desayuno: 'images/iconos/desayuno.svg',
  WiFi: 'images/iconos/wifi.svg',
  Gimnasio: 'images/iconos/gimnasio.svg',
  Estacionamiento: 'images/iconos/estacionamiento.svg',
  Spa: 'images/iconos/spa.svg',
};

const HotelCard = ({ hotel }: any) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <Image src={hotel.imagen} alt={hotel.nombre} width={400} height={250} />
      <div className='p-4'>
        <h2 className='text-xl font-bold'>{hotel.nombre}</h2>
        <p className='text-gray-600'>{hotel.direccion}</p>
        <div className='flex space-x-2 my-2'>
          {hotel.amenities.map(
            (
              amenity: string | number | undefined,
              index: Key | null | undefined
            ) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={amenity ? amenitiesIcons[amenity] : ''}
                alt={amenity?.toString()}
                className='w-6 h-6'
              />
            )
          )}
        </div>
        <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Ver Habitaciones
        </button>
      </div>
    </div>
  );
};

export default HotelCard;

'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmailHotelEs } from '@/utils/send-email-hotel';

export type FormDataHotelEs = {
  fullName: string;
  emailContact: string;
  phone: string;
  hotel: string;
  fromDate: string;
  toDate: string;
  text: string;
};

const HotelFormEn: FC = () => {
  const { register, handleSubmit } = useForm<FormDataHotelEs>();

  function onSubmit(data: FormDataHotelEs) {
    sendEmailHotelEs(data);
  }

  return (
    <>
      <div className='text-center mb-6'>
        <h1 className='text-3xl font-semibold text-red-900'>
          Reserve su hotel
        </h1>
        <p className='py-4 text-gray-600'>
          Por favor complete el formulario y en breve lo contactaremos.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label
            htmlFor='fullName'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Nombre Completo
          </label>
          <input
            type='text'
            placeholder='Nombre Completo'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('fullName', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='phone'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Teléfono de contacto
          </label>
          <input
            type='text'
            placeholder='Teléfono de contacto'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('phone', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='emailContact'
            className='mb-2 text-left  block text-base font-large text-red-900'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='Email'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('emailContact', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='hotel'
            className='mb-2 text-left block text-base font-large text-red-900'
          >
            Seleccione un hotel
          </label>
          <select
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('hotel', { required: true })}
          >
            <option value=''>Seleccione una habitación</option>
            <option value='ENJOY HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125'>
              HOTEL ENJOY HABITACION SUPERIOR SINGLE US$185
            </option>
            <option value='ENJOY HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125'>
              HOTEL ENJOY HABITACION SUPERIOR DOUBLE US$185
            </option>
            <option value='SOLERIOS HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125'>
              HOTEL SOLERIOS HABITACION SUPERIOR SINGLE US$125
            </option>
            <option value='SOLERIOS HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125'>
              HOTEL SOLERIOS HABITACION SUPERIOR DOUBLE US$125
            </option>
            <option value='SOLERIOS HOTEL DELUXE ROOM SINGLE/DOUBLE US$140'>
              HOTEL SOLERIOS HABITACION DELUXE SINGLE US$140
            </option>
            <option value='SOLERIOS HOTEL DELUXE ROOM SINGLE/DOUBLE US$140'>
              HOTEL SOLERIOS HABITACION DELUXE DOUBLE US$140
            </option>
            <option value='SUNSET BEACH HOTEL STANDARD ROOM SINGLE/DOUBLE US$80'>
              HOTEL SUNSET BEACH HABITACION STANDARD SINGLE US$80
            </option>
            <option value='SUNSET BEACH HOTEL STANDARD ROOM SINGLE/DOUBLE US$80'>
              HOTEL SUNSET BEACH HABITACION STANDARD DOUBLE US$80
            </option>
          </select>
        </div>
        <div className='mb-5'>
          <label
            htmlFor='fromDate'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Check In
          </label>
          <input
            type='date'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('fromDate', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='toDate'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Check Out
          </label>
          <input
            type='date'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('toDate', { required: true })}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='text'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Mensaje
          </label>
          <textarea
            placeholder='Mensaje'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-900 outline-none focus:border-red-700 focus:shadow-md'
            {...register('text', { required: true })}
          />
        </div>
        <div className='text-center'>
          <button className='hover:shadow-form rounded-md bg-red-900 py-3 px-8 text-base font-semibold text-white outline-none'>
            Enviar ✉️
          </button>
        </div>
      </form>
    </>
  );
};
export default HotelFormEn;

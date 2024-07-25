'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmailHotel } from '@/utils/send-email-hotel';

export type FormDataHotel = {
  fullName: string;
  emailContact: string;
  phone: string;
  hotel: string;
  fromDate: string;
  toDate: string;
  flightNumber: string;
  text: string;
};

const HotelContact: FC = () => {
  const { register, handleSubmit } = useForm<FormDataHotel>();

  function onSubmit(data: FormDataHotel) {
    sendEmailHotel(data);
  }

  return (
    <>
      <div>
        <h1 className='text-3xl font-semibold text-center text-black'>
          Book your hotel
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label
            htmlFor='fullName'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('fullName', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='phone'
            className='mb-3 block text-base text-left font-medium text-black '
          >
            Phone Number
          </label>
          <input
            type='text'
            placeholder='Phone Number'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('phone', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='emailContact'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            Email
          </label>
          <input
            type='text'
            placeholder='Phone Number'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('emailContact', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='hotel'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            Transfer information
          </label>
          <select
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('hotel', { required: true })}
          >
            <option value=''>Select your acomodation</option>
            <option value='ENJOY HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125 '>
              ENJOY HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$185
            </option>
            <option value='SOLERIOS HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125 '>
              SOLERIOS HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125
            </option>
            <option value='SOLERIOS HOTEL DELUXE ROOM SINGLE/DOUBLE US$140'>
              SOLERIOS HOTEL DELUXE ROOM SINGL/DOUBLE US$140
            </option>
            <option value='SUNSET BEACH HOTEL STANDARD ROOM SINGLE/DOUBLE US$80'>
              SUNSET BEACH HOTEL STANDARD ROOM SINGLE/DOUBLE US$80
            </option>
          </select>
        </div>
        <div className='mb-5'>
          <label
            htmlFor='fromDate'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            From Date
          </label>
          <input
            type='date'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('fromDate', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='toDate'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            To Date
          </label>
          <input
            type='date'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('toDate', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='flightNumber'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            Flight Number
          </label>
          <input
            type='text'
            placeholder='Flight Number'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('flightNumber', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='text'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            Message
          </label>
          <textarea
            placeholder='Message'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('text', { required: true })}
          />
        </div>
        <div>
          <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default HotelContact;

'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmailHotelEn } from '@/utils/send-email-hotel';

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

const HotelFormEn: FC = () => {
  const { register, handleSubmit } = useForm<FormDataHotel>();

  function onSubmit(data: FormDataHotel) {
    sendEmailHotelEn(data);
  }

  return (
    <>
      <div className='text-center mb-6'>
        <h1 className='text-3xl font-semibold text-red-900'>Book your hotel</h1>
        <p className='py-4 text-gray-600'>
          Please fill out the form below and we will contact you as soon as
          possible.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label
            htmlFor='fullName'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('fullName', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='phone'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Phone Number
          </label>
          <input
            type='text'
            placeholder='Phone Number'
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
            Select the accommodation
          </label>
          <select
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('hotel', { required: true })}
          >
            <option value=''>Select your accommodation</option>
            <option value='ENJOY HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125'>
              ENJOY HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$185
            </option>
            <option value='SOLERIOS HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125'>
              SOLERIOS HOTEL SUPERIOR ROOM SINGLE/DOUBLE US$125
            </option>
            <option value='SOLERIOS HOTEL DELUXE ROOM SINGLE/DOUBLE US$140'>
              SOLERIOS HOTEL DELUXE ROOM SINGLE/DOUBLE US$140
            </option>
            <option value='SUNSET BEACH HOTEL STANDARD ROOM SINGLE/DOUBLE US$80'>
              SUNSET BEACH HOTEL STANDARD ROOM SINGLE/DOUBLE US$80
            </option>
          </select>
        </div>
        <div className='mb-5'>
          <label
            htmlFor='fromDate'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            From Date
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
            To Date
          </label>
          <input
            type='date'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('toDate', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='flightNumber'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Flight Number
            <p className='text-xs'>In case you arrive on a flight</p>
          </label>
          <input
            type='text'
            placeholder='Flight Number'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-900 outline-none focus:border-red-700 focus:shadow-md'
            {...register('flightNumber', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='text'
            className='text-left mb-2 block text-base font-large text-red-900'
          >
            Message
          </label>
          <textarea
            placeholder='Message'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-900 outline-none focus:border-red-700 focus:shadow-md'
            {...register('text', { required: true })}
          />
        </div>
        <div className='text-center'>
          <button className='hover:shadow-form rounded-md bg-red-900 py-3 px-8 text-base font-semibold text-white outline-none'>
            Submit ✉️
          </button>
        </div>
      </form>
    </>
  );
};
export default HotelFormEn;

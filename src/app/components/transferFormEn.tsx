'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmailtransferEn } from '@/utils/send-email-transfer';

export type FormDataTransferEn = {
  fullName: string;
  emailContact: string;
  phone: string;
  transferInfo: string;
  fromDate: string;
  toDate: string;
  flightNumber: string;
  text: string;
};

const TransferContactEn: FC = () => {
  const { register, handleSubmit } = useForm<FormDataTransferEn>();

  function onSubmit(data: FormDataTransferEn) {
    sendEmailtransferEn(data);
  }

  return (
    <>
      <div className='max-w-xlg mx-auto p-5 bg-white rounded-lg shadow-md'>
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-semibold text-red-900'>
            Book your transfer
          </h1>
          <p className='py-4 text-gray-600'>
            Please fill out the form below and we will contact you as soon as
            possible.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-5'>
            <label
              htmlFor='fullName'
              className='mb-2 block text-base text-left font-large text-red-950'
            >
              Full Name
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='w-full text-left rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('fullName', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='phone'
              className='text-left mb-2 block text-base font-large text-red-950'
            >
              Phone Number
            </label>
            <input
              type='text'
              placeholder='Phone Number'
              className='w-full text-left  rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('phone', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='emailContact'
              className='mb-2 text-left block text-base font-large text-red-950'
            >
              Email
            </label>
            <input
              type='email'
              placeholder='Email'
              className='w-full text-left rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('emailContact', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='transferInfo'
              className='mb-2 text-left block text-base font-large text-red-950'
            >
              Transfer Information
            </label>
            <select
              className='w-full  rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('transferInfo', { required: true })}
            >
              <option value=''>Select your departure</option>
              <option value='Carrasco International Airport to Punta del Este'>
                From Airport Carrasco International to Punta del Este
              </option>
              <option value='Laguna del Sauce International Airport to Punta del Este'>
                From Airport International Laguna del Sauce to Punta del Este
              </option>
            </select>
          </div>
          <div className='mb-5'>
            <label
              htmlFor='fromDate'
              className='text-left mb-2 block text-base font-large text-red-950'
            >
              Arrive Date
            </label>
            <input
              type='date'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('fromDate', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='toDate'
              className='text-left mb-2 block text-base font-large text-red-950'
            >
              Departure Date
            </label>
            <input
              type='date'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('toDate', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='flightNumber'
              className='text-left mb-2 block text-base font-large text-red-950'
            >
              Flight Number
              <p className='text-xs'>In case you arrive on a flight</p>
            </label>
            <input
              type='text'
              placeholder='Flight Number'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('flightNumber', { required: false })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='text'
              className='text-left mb-2 block text-base font-large text-red-950'
            >
              Message
            </label>
            <textarea
              placeholder='Message'
              className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-large text-red-950 outline-none focus:border-red-700 focus:shadow-md'
              {...register('text', { required: true })}
            />
          </div>
          <div className='text-center'>
            <button className='hover:shadow-form rounded-md bg-red-900 py-3 px-8 text-base font-semibold text-white outline-none'>
              Send ✉️
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default TransferContactEn;

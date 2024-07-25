'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmailtransfer } from '@/utils/send-email-transfer';

export type FormDataTransfer = {
  fullName: string;
  emailContact: string;
  phone: string;
  transferInfo: string;
  fromDate: string;
  toDate: string;
  flightNumber: string;
  text: string;
};

const TransferContact: FC = () => {
  const { register, handleSubmit } = useForm<FormDataTransfer>();

  function onSubmit(data: FormDataTransfer) {
    sendEmailtransfer(data);
  }

  return (
    <><div>
      <h1 className='text-3xl font-semibold text-center text-black'>
        Book your transfer
      </h1>
    </div><form onSubmit={handleSubmit(onSubmit)}>
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
            {...register('fullName', { required: true })} />
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
            {...register('phone', { required: true })} />
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
            {...register('emailContact', { required: true })} />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='transferInfo'
            className='mb-3 block text-base font-medium text-left text-black'
          >
            Transfer information
          </label>
          <select
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('transferInfo', { required: true })}
          >
            <option value=''>Select your departure</option>
            <option value='Carrasco International Airport to Punta del Este '>
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
            className='mb-3 block text-base font-medium text-left text-black'
          >
            From Date
          </label>
          <input
            type='date'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-red-700 focus:shadow-md'
            {...register('fromDate', { required: true })} />
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
            {...register('toDate', { required: true })} />
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
            {...register('flightNumber', { required: true })} />
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
            {...register('text', { required: true })} />
        </div>
        <div>
          <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
            Submit
          </button>
        </div>
      </form></>
  );
};
export default TransferContact;

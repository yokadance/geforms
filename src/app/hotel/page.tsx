'use client';

import Head from 'next/head';
import * as React from 'react';

import HotelContact from '@/app/components/hotelForm';

export default function Transfers() {
  return (
    <main>
      <Head>
        <title>RGC</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <HotelContact />
        </div>
      </section>
    </main>
  );
}

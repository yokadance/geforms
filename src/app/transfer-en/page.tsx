'use client';

import Head from 'next/head';
import * as React from 'react';

import TransferContactEn from '@/app/components/transferFormEn';

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function Transfers() {
  return (
    <main>
      <Head>
        <title>RGC</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <TransferContactEn />
        </div>
      </section>
    </main>
  );
}

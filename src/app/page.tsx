'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import Hero from '@/components/header/HeaderTraslados';

import Home from './transfer-en/page';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hfgfdgdfgdfgi</title>
      </Head>
      <section className='bg-white'>
        <div className=''>
          <Hero />
          <Home />
        </div>
      </section>
    </main>
  );
}

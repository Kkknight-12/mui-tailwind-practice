import React from 'react';
import Navbar from './component/Navbar';

export default function Layout({ children }) {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      {children}
    </main>
  );
}

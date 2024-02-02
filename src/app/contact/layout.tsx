import React from 'react';
import '@/app/ui/global.css';
import { Inter } from 'next/font/google';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conatct Page',
  description: 'This page is all about containg  information',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Inter} antialiased`}>{children}</body>
    </html>
  );
}

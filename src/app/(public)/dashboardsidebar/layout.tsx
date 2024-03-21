import React from 'react';
import '@/app/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    <div className={`antialiased`}>{children}</div>
    // </html>
  );
}

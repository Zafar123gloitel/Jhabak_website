import React from 'react';
import '@/app/ui/global.css';
import { Inter } from 'next/font/google';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Our Stock Brokerage Services - Jhabak Share & Stock Broker',
    template: 'Services | %s',
  },
  description:
    'Explore the comprehensive stock brokerage services offered by Jhabak Share & Stock Broker. From stock trading and portfolio management to investment advisory, our professional team provides tailored solutions to help you achieve your financial goals. Experience the power of informed decision-making with our cutting-edge services.',
  keywords: [
    'Stock Brokerage Services',
    'Jhabak Share & Stock Broker',
    'Stock Trading',
    'Portfolio Management',
    'Investment Advisory',
    'Financial Goals',
    'Tailored Solutions',
    'Informed Decision-Making',
    'Comprehensive Services',
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Inter} antialiased`}>{children}</body>
    </html>
  );
}

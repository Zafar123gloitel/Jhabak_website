import React from 'react';
import '@/app/ui/global.css';
import { Inter } from 'next/font/google';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Contact Us | Jhabak Share & Stock Broker',
    template: '%s | Jhabak Share & Stock Broker ',
  },
  description:
    'Connect with Jhabak Share & Stock Broker for all your trading needs. Contact us for inquiries, account assistance, or any questions you have about our trading services. Our experienced team is here to provide expert guidance on stocks, forex, and investment strategies.',
  keywords: [
    'Contact Us',
    'Trading Brokers',
    'Financial Consultation',
    'Brokerage Services',
    'Inquiries',
    'Account Assistance',
    'Jhabak Trading',
    'Stock Trading',
    'Forex Trading',
    'Investment Strategies',
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${Inter} antialiased`}>{children}</body>
    </html>
  );
}

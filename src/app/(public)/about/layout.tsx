import React from 'react';
import '@/app/globals.scss';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'About Jhabak Share & Stock Broker - Our Story and Mission',
    template: 'About Us | %s Trading | Jhabak Share & Stock Broker',
  },
  description:
    'Discover the story and mission of Jhabak Share & Stock Broker. As your trusted financial partner, we are committed to providing expert stock brokerage services. Learn about our team of professionals dedicated to transparency, integrity, and empowering clients with effective investment strategies.',
  keywords: [
    'About Us',
    'Jhabak Share & Stock Broker',
    'Stock Brokerage Services',
    'Financial Partner',
    'Transparency in Finance',
    'Investment Strategies',
    'Empowering Clients',
    'Our Story',
    'Mission and Values',
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

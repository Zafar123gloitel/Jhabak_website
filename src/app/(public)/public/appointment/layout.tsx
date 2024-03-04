import React from 'react';

export default function AppoinmentLayout({ children }: { children: React.ReactNode }) {
  return <div className={`antialiased`}>{children}</div>;
}

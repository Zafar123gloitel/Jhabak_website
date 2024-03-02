import React from 'react';
import '@/app/globals.scss';

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* {dataUser?.role==='admin'&& */}
      <div className={`main_dashboard All_content_center`}>
        <div className={`main_dashboard d-flex w-100 css_max_screen`}>
          <div className={`data_section inner_plans_tabs`}>{children}</div>
        </div>
      </div>
    </>
  );
}

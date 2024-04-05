'use client';
import React from 'react';
import '@/app/globals.scss';

export default function ClientInfromation({ children }: { children: React.ReactNode }) {
  // const toggle = useAppSelector(selectToggle);

  return (
    <>
      {/* {dataUser?.role==='admin'&& */}
      <div className={`main_dashboard element_center client_container`}>
        <div className={`main_dashboard d-flex w-100 css_max_screen element_center `}>
          <div className={`data_section inner_plans_tabs full_width client_data`}>{children}</div>
        </div>
      </div>
    </>
  );
}

'use client';
import React from 'react';
import '@/app/globals.scss';
import { usePathname } from 'next/navigation';

export default function ClientInfromation({ children }: { children: React.ReactNode }) {
  // const toggle = useAppSelector(selectToggle);
  const pathname = usePathname();

  return (
    <>
      {/* {dataUser?.role==='admin'&& */}
      <div className={`main_dashboard All_content_center`}>
        <div className={`main_dashboard d-flex w-100 css_max_screen `}>
          <>
            {/* <div className={`sidebar_main`}>
              <Sidebar isToggle={isToggle} setIsToggle={() => setIsToggle(!isToggle)} />
            </div> */}
          </>
          <div className={`data_section inner_plans_tabs full_width ${pathname.startsWith('/client') ? 'w-100' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

'use client';
import React, { useState } from 'react';
import '@/app/globals.scss';
import { Sidebar } from '@/components';

export default function ClientInfromation({ children }: { children: React.ReactNode }) {
  // const toggle = useAppSelector(selectToggle);
  const [isToggle, setIsToggle] = useState(true);

  return (
    <>
      {/* {dataUser?.role==='admin'&& */}
      <div className={`main_dashboard All_content_center`}>
        <div className={`main_dashboard d-flex w-100 css_max_screen `}>
          <>
            <div className={`sidebar_main`}>
              <Sidebar isToggle={isToggle} setIsToggle={() => setIsToggle(!isToggle)} />
            </div>
          </>
          <div className={`data_section inner_plans_tabs ${isToggle && 'full_width'}`}>{children}</div>
        </div>
      </div>
    </>
  );
}

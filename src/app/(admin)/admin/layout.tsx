import React from 'react';
import '@/app/globals.scss';
import { Sidebar } from '@/components';

export default function ClientInfromation({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* {dataUser?.role==='admin'&& */}
      <div className={`main_dashboard All_content_center`}>
        <div className={`main_dashboard d-flex w-100 css_max_screen justify-content-between`}>
          <>
            <div className={`sidebar_main`}>
              <Sidebar />
            </div>
          </>
          <div className={`data_section inner_plans_tabs`}>{children}</div>
        </div>
      </div>
    </>
  );
}

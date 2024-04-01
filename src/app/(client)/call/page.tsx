import React from 'react';
import style from './call.module.scss';
import HeadingButton from '@/components/call/headingButton/headingButton';

export default function page() {
  return (
    <>
      <section className={`${style.mainsection}`}>
        <div className={`${style.divconatiner}`}>
          <HeadingButton />
        </div>
      </section>
    </>
  );
}

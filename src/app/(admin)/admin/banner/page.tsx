'use client';
import React from 'react';
import { withAuthentication } from '@/hocs';
import BannerCustomize from '@/components/admin/bannerUpload';

const Bannerpage = () => {
  return (
    <>
      <BannerCustomize />
    </>
  );
};

export default withAuthentication(Bannerpage);

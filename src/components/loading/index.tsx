import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

function LoadingSection() {
  return (
    <div className={`${styles.image} element_center`}>
      <Image src="/assets/images/loader.gif" alt="loading" width={150} height={150} />
    </div>
  );
}

export default LoadingSection;

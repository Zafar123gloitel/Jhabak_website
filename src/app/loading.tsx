import Image from 'next/image';
import styles from '@/components/loading/styles.module.scss';
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className={`${styles.image} element_center`}>
      <Image src="/assets/svg/loader.gif" alt="loading" width={150} height={150} />
    </div>
  );
}

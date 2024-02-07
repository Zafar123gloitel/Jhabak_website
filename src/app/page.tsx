import { IntardayStrategy, WeAreAdvisory, WeBuildDream } from '@/components';
import styles from './page.module.css';
import NeedHelpSection from '@/components/landing/needHelpSection';
import Segments from '@/components/landing/segments';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Banner /> */}
      <WeAreAdvisory />
      <IntardayStrategy />
      <NeedHelpSection />
      <Segments />
      <WeBuildDream />
    </main>
  );
}

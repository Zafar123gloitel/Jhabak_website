import styles from './page.module.css';
import {
  // BannerSection,
  // Banner,
  BasicRuleTrading,
  Enquiry,
  IntardayStrategy,
  NeedHelpSection,
  Pricing,
  Segments,
  // VideoContent,
  MasterTechnical,
  WeBuildDream,
  WeAreAdvisory,
} from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <BannerSection /> */}
      {/* <VideoContent /> */}
      <MasterTechnical />
      <WeAreAdvisory />
      <BasicRuleTrading />
      <IntardayStrategy />
      <NeedHelpSection />
      <Segments />
      <WeBuildDream />
      <Pricing />
      <Enquiry />
    </main>
  );
}

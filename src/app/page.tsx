import styles from './page.module.css';
import {
  // BannerSection,
  // Banner,
  BasicRuleTrading,
  Enquiry,
  // IntardayStrategy,
  NeedHelpSection,
  Pricing,
  Segments,
  // VideoContent,
  MasterTechnical,
  WeAreAdvisory,
  RuleTrading,
  MutualFundServices,
} from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <BannerSection /> */}
      {/* <VideoContent /> */}
      <MasterTechnical />
      <WeAreAdvisory />
      <Pricing />
      <RuleTrading />
      <BasicRuleTrading />
      {/* <IntardayStrategy /> */}
      <NeedHelpSection />
      <Segments />
      <MutualFundServices />
      <Enquiry />
    </main>
  );
}

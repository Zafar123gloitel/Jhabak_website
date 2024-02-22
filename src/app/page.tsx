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
  VideoContent,
  WeAreAdvisory,
  WeBuildDream,
} from '@/components';

const Home = () => {
  return (
    <main className={styles.main}>
      {/* <BannerSection /> */}
      <VideoContent />
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
};
export default Home;

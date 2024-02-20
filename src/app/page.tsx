'use client';
import React from 'react';
import styles from './page.module.css';

// import LoadingSection from '@/components/loading';
// import Loading from './loading';
// import dynamic from 'next/dynamic';
import {
  // BannerSection,
  VideoSection,
  // IntradayStrategy,
  NeedHelpSection,
  Segments,
  MutualFund,
  Packages,
  Enquiry,
  WeAreAdvisory,
  RuleTrading,
  BasicRuleTrading,
  // VideoContent,
} from '../components/landing';
// const BasicRuleTrading = dynamic(() => import('../components/landing/basicRuleTrading'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// // const VideoContent = dynamic(() => import('../components/landing/videoContent'));
// const VideoSection = dynamic(() => import('../components/landing/videoSection'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// // const IntradayStrategy = dynamic(() => import('../components/landing/intradayStrategy'));
// const NeedHelpSection = dynamic(() => import('../components/landing/needHelpSection'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// const Segments = dynamic(() => import('../components/landing/segments'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// const MutualFund = dynamic(() => import('../components/landing/mutualFund'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// const Packages = dynamic(() => import('../components/landing/packagesSection'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// const Enquiry = dynamic(() => import('../components/landing/enquiry'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// const WeAreAdvisory = dynamic(() => import('../components/landing/weAreAdvisory'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });
// const RuleTrading = dynamic(() => import('../components/landing/ruleTrading'), {
//   loading: () => <LoadingSection />, // Replace this with your loading component
// });

export default function Home() {
  return (
    <main className={styles.main}>
      {/* section 1 */}
      {/* <BannerSection /> */}
      {/* <VideoContent /> */}
      {/* section 2 */}
      <VideoSection />
      {/* section 3 */}
      <WeAreAdvisory />
      {/* section 4 */}
      <Packages />
      {/* section 5 */}
      <RuleTrading />
      {/* section 6 */}
      <BasicRuleTrading />

      {/* <IntradayStrategy /> */}
      {/* section 7 */}
      <NeedHelpSection />
      {/* section 8 */}
      <Segments />
      {/* section 9 */}
      <MutualFund />
      {/* section 10 */}
      <Enquiry />
    </main>
  );
}

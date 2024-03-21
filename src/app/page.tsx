'use client';
import React from 'react';
// import styles from '@/app/page.module.scss';
import Loading from '@/components/loading';
import dynamic from 'next/dynamic';
// import { BannerSection } from '@/components';
import Slider from '@/components/landing/slider';

const BasicRuleTrading = dynamic(() => import('../components/landing/basicRuleTrading'), {
  loading: () => <Loading />,
  ssr: false, // Replace this with your loading component
});
// const VideoContent = dynamic(() => import('../components/landing/videoContent'));
const VideoSection = dynamic(() => import('../components/landing/videoSection'), {
  loading: () => <Loading />,
  ssr: false, // Replace this with your loading component
});
// const IntradayStrategy = dynamic(() => import('../components/landing/intradayStrategy'));
// const NeedHelpSection = dynamic(() => import('../components/landing/needHelpSection'), {
//   loading: () => <Loading />,
//   ssr: false, // Replace this with your loading component
// });
// const Segments = dynamic(() => import('../components/landing/segments'), {
//   loading: () => <Loading />,
//   ssr: false, // Replace this with your loading component
// });
const MutualFund = dynamic(() => import('../components/landing/mutualFund'), {
  loading: () => <Loading />,
  ssr: false, // Replace this with your loading component
});
const Packages = dynamic(() => import('../components/landing/packagesSection'), {
  loading: () => <Loading />,
  ssr: false, // Replace this with your loading component
});
const Enquiry = dynamic(() => import('../components/landing/enquiry'), {
  loading: () => <Loading />,
  ssr: false, // Replace this with your loading component
});
const WeAreAdvisory = dynamic(() => import('../components/landing/weAreAdvisory'), {
  loading: () => <Loading />,
  ssr: false, // Replace this with your loading component
});
const RuleTrading = dynamic(() => import('../components/landing/ruleTrading'), {
  loading: () => <Loading />,
  ssr: false, // Replace this with your loading component
});

function Home() {
  return (
    <main>
      {/* section 1 */}
      {/* <BannerSection /> */}
      <Slider />
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
      {/* <NeedHelpSection /> */}
      {/* section 8 */}
      {/* <Segments /> */}
      {/* section 9 */}
      <MutualFund />
      {/* section 10 */}
      <Enquiry />
    </main>
  );
}
export default Home;

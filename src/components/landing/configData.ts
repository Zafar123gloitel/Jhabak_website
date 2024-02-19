export interface MasterTechnical {
  id: number;
  content: string;
  contentList: string[];
  heading: string;
  href: string;
  video: string;
  frameLink: string;
}

export const masterTechnicalData: MasterTechnical[] = [
  {
    id: 551,
    heading: 'Master Technical Analysis with Jhabak Stock & Share Broker!',
    contentList: [
      'Identify Profitable Trading Opportunities.',
      'Understand Market Trends & Patterns',
      'Execute Well - Informed Trades with Confidence',
    ],
    content: 'Learn from industry experts and gain invaluable insights to:',
    href: '/',
    video: 'https://res.cloudinary.com/ddaddjwgj/video/upload/v1707478996/jhabak_trading/ut2nsknsn9bxg41k1uqd.mp4',
    frameLink: '',
  },
];

export interface Pricing {
  id: number;
  callType: string;
  hrs: number;
  price: number;
  featureHeading: string;
  featureList: string[];
  href: string;
  heading: string;
}

export const PricingData: Pricing[] = [
  {
    id: 301,
    callType: 'Day Call',
    hrs: 36,
    price: 1500,
    heading: 'Intraday Trading',
    featureHeading: 'Our Best Features',
    featureList: [
      '100% Intraday Trading Calls',
      'Free Strategies',
      'Free Software',
      'Live market support',
      'Free Learning Videos',
      'Support option hedge',
    ],
    href: '/',
  },
  {
    id: 302,
    callType: 'Weekly Call',
    hrs: 6,
    price: 1500,
    featureHeading: 'Our Best Features',
    heading: 'Intraday Trading',
    featureList: [
      '100% Intraday Trading Calls',
      'Free Strategies',
      'Free Software',
      'Live market support',
      'Free Learning Videos',
      'Support option hedge',
    ],
    href: '/',
  },
  {
    id: 303,
    callType: 'Monthly Call',
    heading: 'Intraday Trading',
    hrs: 150,
    price: 1500,
    featureHeading: 'Our Best Features',
    featureList: [
      '100% Intraday Trading Calls',
      'Free Strategies',
      'Free Software',
      'Live market support',
      'Free Learning Videos',
      'Support option hedge',
    ],
    href: '/',
  },
];

export interface IStartegy {
  id: number;
  title: string;
  imgSrc: string;
}

export const StartegyData: IStartegy[] = [
  {
    id: 111,
    title: 'Set Clear Targets',
    imgSrc: '/assets/svg/landing/target.svg',
  },
  {
    id: 112,
    title: 'Risk Management',
    imgSrc: '/assets/svg/landing/risk.svg',
  },
  {
    id: 113,
    title: 'Monitor Overall Market',
    imgSrc: '/assets/svg/landing/overall_market.svg',
  },
  {
    id: 114,
    title: 'Stay Informed',
    imgSrc: '/assets/svg/landing/stay_informed.svg',
  },

  {
    id: 115,
    title: 'Continues Learning',
    imgSrc: '/assets/svg/landing/continues_learning.svg',
  },
  {
    id: 116,
    title: 'Timing is Key',
    imgSrc: '/assets/svg/landing/key.svg',
  },
];

// basic rule component
export const basicRules = [
  'Avoid unregistered brokers',
  'Maintain emotional discipline',
  'Ignore market rumors',
  'Conduct thorough research',
  'Select quality stocks',
  'Implement stop-loss orders',
  'Avoid excessive greed',
  'Implement hedging strategies',
  'Take calculated risks',
  'Seek grievance redressal',
];

export interface IBaseRule {
  id: number;
  heading: string;
  content: string;
}

export const baseRuleData: IBaseRule[] = [
  {
    id: 2111,
    heading: 'Set Clear Targets',
    content:
      'Before entering a trade, it is essential to have predefined profit and loss targets. This ensures that you have a clear plan in place and helps you avoid making emotional decisions in the heat of the moment. Knowing when to take profits and cut losses is crucial for successful trading.',
  },
  {
    id: 2112,
    heading: 'Risk Managementzed',
    content:
      'Limiting risk is fundamental to successful trading. Implementing stop-loss orders for each trade helps to mitigate potential losses by automatically selling a security when it reaches a specified price. This strategy is a key component of risk management, preventing significant financial downturns.',
  },
  {
    id: 2113,
    heading: 'Timing is Key',
    content:
      'Executing trades during peak market hours can enhance liquidity and reduce the bid-ask spread. This is because more market participants are actively buying and selling during these hours, providing better opportunities for optimal trade execution.',
  },
  {
    id: 2114,
    heading: 'Continuous Learning',
    content:
      'The financial markets are dynamic and constantly evolving. Continuous learning about market trends, new trading strategies, and evolving economic conditions is crucial for staying ahead. This ongoing education helps traders adapt to changing circumstances and refine their approaches.',
  },
];

// We Build Dreams Data

export interface ISvgData {
  id: number;
  svgSrc: string;
  svgHeading: string;
}
export interface IBuildDreams {
  id: number;
  smallHeading: string;
  heading: string;
  content: string;
  imgSrc: string;
  svgList: ISvgData[];
}

export const buildDreamData: IBuildDreams[] = [
  {
    id: 3111,
    smallHeading: 'Investing made Easy for you',
    heading: 'Mutual Funds Investment Services',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    imgSrc: '/assets/svg/landing/potli.svg',
    svgList: [
      {
        id: 3121,
        svgSrc: '/assets/svg/landing/high_return.svg',
        svgHeading: 'High Return',
      },
      {
        id: 3122,
        svgSrc: '/assets/svg/landing/tax_saving.svg',
        svgHeading: 'Tax Saving',
      },
      {
        id: 3123,
        svgSrc: '/assets/svg/landing/sip.svg',
        svgHeading: 'Sip with 500',
      },
      // Add more SVG data objects as needed
    ],
  },
];

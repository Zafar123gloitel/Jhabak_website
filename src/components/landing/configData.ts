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

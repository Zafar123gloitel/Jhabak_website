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

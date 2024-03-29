export interface Advantages {
  id: number;
  smallHeading: string;
  Heading: string;
  content: string[];

  imgSrc: string;
}

export const advantagesData: Advantages[] = [
  {
    id: 201,
    Heading: 'Bank Nifty Options advisor',
    smallHeading: 'Trade from Anywhere',
    content: [
      'Global Access: Trade from anywhere.',
      'Convenience: Trade comfortably from home, office, or on the move.',
      'Flexibility: No location constraints; trade anytime.',
      'Brokerage/Demat Account: Essential for day trading.',
      'Mobile Trading: Ideal for traders on the move.',
      '24/7 Market Access: Trade round the clock.',
    ],
    imgSrc: '/assets/images/services/trade_anywhere.jpg',
  },
  {
    id: 202,
    Heading: 'Stock Market calls provider in Futures',
    smallHeading: 'Intraday Trading may become 2nd Source of Income',
    content: [
      'Quick Profits: Fast profit potential in short timeframes.',
      'Multiple Trades: Execute numerous trades in a day.',
      'Heightened Risk: Increased risk due to market volatility.',
      'Risk Management Importance: Essential for mitigating potential losses.',
      'Expert Analysis: SEBI RIA/Technical Analysts employ strategies for profitable trades.',
      'Swift Capitalization: Experts act quickly on identified opportunities.',
    ],

    imgSrc: '/assets/images/services/source.png',
  },
  {
    id: 203,
    Heading: 'Index Futures',
    smallHeading: 'No Overnight Risk',
    content: [
      'Lower Risk: Compared to traditional investing.',
      'No Overnight Exposure: Positions not held overnight.',
      'Stop-loss Orders: Used to minimize losses, enhancing risk management.',
      'Immediate Reaction: Swift response to market changes.',
      'Dynamic Risk Management: Adjustments based on real-time market movements.',
      'Focused Strategy: Concentration on short-term market dynamics.',
    ],

    imgSrc: '/assets/svg/service/no_risk.svg',
  },
  {
    id: 204,
    Heading: 'Index Futures',
    smallHeading: 'Flexibility and Control',
    content: [
      'Customizable Strategies: Traders choose their own strategies and rules.',
      'Real-time Monitoring: Keep track of positions instantly.',
      'Quick Decision-making: React promptly to market changes.',
      'Intraday Advisor Support: Available on WhatsApp for instant assistance.',
      'Direct Communication: Ask queries directly without delay.',
      'Expert Guidance: Access to professional advice during market hours.',
    ],

    imgSrc: '/assets/svg/service/flexibility_control.svg',
  },
];

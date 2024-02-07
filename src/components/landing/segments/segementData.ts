export interface Segment {
  id: number;
  smallHeading: string;
  Heading: string;
  content: string;
  list: string[];
  button: string;
  imgSrc: string;
}

export const segmentData: Segment[] = [
  {
    id: 201,
    smallHeading: 'Bank Nifty Options advisor',
    Heading: 'Nifty + Banknifty Options Calls',
    content:
      'We love to provide advice on  Index options such as Nifty options and Banknifty options calls for Intraday Traders as we do not keep the overnight position in options and we provide only long calls in options and avoid options writing as it require high margin as compare to options buying. so our USP is ',
    list: [
      '100% Intraday  calls ( no overnight risk at all )',
      '100% Live Market (no pre market call)',
      'Only long calls in options',
    ],
    button: 'Read More About Options Plan ',
    imgSrc: '/assets/images/landing_page/banknifty.png',
  },
  {
    id: 202,
    smallHeading: 'Stock Market calls provider in Futures',
    Heading: '100% Intraday Calls in Stock Futures',
    content: 'We provide stock futures calls with the following features',
    list: [
      'Small stoploss',
      '1-3 calls daily (as per your profile)',
      'You can use Bracket orders for saving a lot of margins.',
      'Always Trade with Highly Qualified intraday calls provider in India',
    ],
    button: 'Read More About Options Plan ',
    imgSrc: '/assets/images/landing_page/intradaycall.jpg',
  },
  {
    id: 203,
    smallHeading: 'Index Futures',
    Heading: 'Nifty Future + Banknifty Futures',
    content:
      'If you can trade with 2 lots minimum and have a high-risk appetite then you may be suitable for this plan.* Complete your Risk Profile Today.',
    list: [
      'All calls are intraday',
      'Nifty and Banknifty both are included',
      'Stock futures are not present in this plan',
      'You will get proper entry, SL and Target Levels',
    ],
    button: 'Read More About Options Plan ',
    imgSrc: '/assets/images/landing_page/future.png',
  },
];

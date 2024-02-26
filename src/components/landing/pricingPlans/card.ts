export interface Pricing {
  id: number;
  callType: string;
  hrs: number;
  price: number;
  featureHeading: string;
  featureList: string[];
  href: string;
}

export const PricingData: Pricing[] = [
  {
    id: 301,
    callType: 'Day Call',
    hrs: 6,
    price: 1500,
    featureHeading: 'Our Best Features',
    featureList: ['Live market support', 'Daily intraday trade', 'Daily intraday trade'],
    href: '/',
  },
  {
    id: 302,
    callType: 'Weekly Call',
    hrs: 6,
    price: 1500,
    featureHeading: 'Our Best Features',
    featureList: ['Live market support', 'Daily intraday trade', 'Daily intraday trade'],
    href: '/',
  },
  {
    id: 303,
    callType: 'Monthly Call',
    hrs: 6,
    price: 1500,
    featureHeading: 'Our Best Features',
    featureList: ['Live market support', 'Daily intraday trade', 'Daily intraday trade'],
    href: '/',
  },
];

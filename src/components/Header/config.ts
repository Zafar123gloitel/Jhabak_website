export interface pageRoute {
  id: number;
  name: string;
  href: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 141,
    name: 'Home',
    href: '/',
  },

  {
    id: 142,
    name: 'About',
    href: '/about',
  },
  {
    id: 143,
    name: 'Services',
    href: '/services',
  },
  {
    id: 144,
    name: 'Contact Us',
    href: '/contact',
  },
];

export const loginPageRoute: pageRoute[] = [
  {
    id: 141,
    name: 'Home',
    href: '/',
  },

  {
    id: 142,
    name: 'About',
    href: '/about',
  },
  {
    id: 143,
    name: 'Services',
    href: '/services',
  },
  {
    id: 144,
    name: 'Contact Us',
    href: '/contact',
  },

  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];

export const clientPageRoute: pageRoute[] = [
  {
    id: 163,
    name: 'Day Call',
    href: '/day_call',
  },

  {
    id: 156,
    name: 'Week Call',
    href: '/week_call',
  },
  {
    id: 189,
    name: 'Month Call',
    href: '/month_call',
  },
  {
    id: 858,
    name: 'Long Term',
    href: '/long_term',
  },
];

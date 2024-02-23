export interface pageRoute {
  id: number;
  name: string;
  href: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 1,
    name: 'DASHBOARD',
    href: '/DASHBOARD',
  },

  {
    id: 2,
    name: 'CLIENT',
    href: '/CLIENT',
  },
  {
    id: 3,
    name: 'INQUIRY HANDLE',
    href: '/INQUIRY HANDLE',
  },
  {
    id: 4,
    name: 'PLANS',
    href: '/PLANS',
  },
  {
    id: 5,
    name: 'BANNER /OFFER',
    href: '/BANNER /OFFER',
  },

  {
    id: 6,
    name: 'OFFER',
    href: '/OFFER',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];

export interface pageRoute {
  id: number;
  name: string;
  href: string;
  imgSrc: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 1,
    name: 'DASHBOARD',
    href: '/DASHBOARD',
    imgSrc: '/assets/svg/sidebar/Home.svg',
  },

  {
    id: 2,
    name: 'CLIENT',
    href: '/CLIENT',
    imgSrc: '/assets/svg/sidebar/Admin.svg',
  },
  {
    id: 3,
    name: 'INQUIRY HANDLE',
    href: '/INQUIRY HANDLE',
    imgSrc: '/assets/svg/sidebar/Calendar.svg',
  },
  {
    id: 4,
    name: 'PLANS',
    href: '/PLANS',
    imgSrc: '/assets/svg/sidebar/Plans.svg',
  },
  {
    id: 5,
    name: 'BANNER /OFFER',
    href: '/BANNER /OFFER',
    imgSrc: '/assets/svg/sidebar/Banner.svg',
  },

  {
    id: 6,
    name: 'OFFER',
    href: '/OFFER',
    imgSrc: '/assets/svg/sidebar/Setting.svg',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];

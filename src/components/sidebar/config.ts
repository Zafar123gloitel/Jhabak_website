export interface pageRoute {
  id: number;
  name: string;
  href: string;
  imgSrc: string;
}
export const pageRoute: pageRoute[] = [
  {
    id: 1,
    name: 'Dashboard',
    href: '/Admin',
    imgSrc: '/assets/svg/sidebar/Home.svg',
  },

  {
    id: 2,
    name: 'Client',
    href: '/UiAdmin/client',
    imgSrc: '/assets/svg/sidebar/Admin.svg',
  },
  {
    id: 3,
    name: 'Inquiry Handle',
    href: '/UiAdmin/enquiryHandle',
    imgSrc: '/assets/svg/sidebar/Calendar.svg',
  },
  {
    id: 4,
    name: 'Plans',
    href: '/UiAdmin/plans',
    imgSrc: '/assets/svg/sidebar/Plans.svg',
  },
  {
    id: 5,
    name: 'Banner',
    href: '/UiAdmin/banner',
    imgSrc: '/assets/svg/sidebar/Banner.svg',
  },

  {
    id: 6,
    name: 'Offer',
    href: '/UiAdmin/offer',
    imgSrc: '/assets/svg/sidebar/Setting.svg',
  },
  //   {
  //     id: 5,
  //     name: 'Home',
  //     href: '/',
  //   },
];

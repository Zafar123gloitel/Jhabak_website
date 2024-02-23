export interface Contact {
  id: number;
  imgSrc: string;
  heading: string;
  content: string;
}

export const contactDetails: Contact[] = [
  {
    id: 351,
    imgSrc: '/assets/svg/contact/timing.svg',
    heading: 'Office Timings',
    content: 'Monday - Saturday (9:00am to 5pm) Sunday (Closed)',
  },
  {
    id: 352,
    imgSrc: '/assets/svg/contact/mail.svg',
    heading: 'Email Address',
    content: 'jhabakshares@gmail.com ',
  },
  {
    id: 353,
    imgSrc: '/assets/svg/contact/call.svg',
    heading: 'Phone Number',
    content: '+91 96915 02157',
  },
];

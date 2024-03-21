/** @type {import('next').NextConfig} */
import WithPWA from 'next-pwa';

const withPWA = WithPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // if you don't need to debug service worker in dev, you can set disable:
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA({
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
});

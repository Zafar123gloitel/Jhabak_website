/** @type {import('next').NextConfig} */
const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // if you don't need to debug service worker in dev, you can set disable:
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    path: 'https://cdn.sanity.io/',
  },
};

export default nextConfig;

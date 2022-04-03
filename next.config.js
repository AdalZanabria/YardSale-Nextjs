/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space'],
  },
  /* env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/AdalZanabria',
        permanent: true,
      },
    ];
  }, */
};

module.exports = nextConfig;

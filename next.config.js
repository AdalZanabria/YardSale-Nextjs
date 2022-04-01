/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
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
  },
};

module.exports = nextConfig;

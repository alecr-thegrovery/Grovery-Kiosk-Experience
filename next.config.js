/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,

  //IMAGE LOADER
  images: {
    unoptimized: true,
  },

  //TRAILING SLASHES
  trailingSlash: true,

  //REDIRECTS
  async redirects() {
    return [
      {
        source: '/redirect-test',
        destination: '/',
        permanent: true,
      },
    ]
  }

}

module.exports = nextConfig
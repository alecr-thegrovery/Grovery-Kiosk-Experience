/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */

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

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
})

//module.exports = nextConfig
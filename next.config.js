/**
 * @type {import('next').NextConfig}
 */
const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = withPWA({
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

})



/*module.exports = withPWA({
  // next.js config
})*/

module.exports = nextConfig
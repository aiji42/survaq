const rewrites = async () => {
  return {
    fallback: [
      {
        source: '/assets/:path*',
        destination: 'http://survaq-chachat.s3-website-ap-northeast-1.amazonaws.com/assets/:path*'
      },
      {
        source: '/:path*',
        destination: 'http://survaq-chachat.s3-website-ap-northeast-1.amazonaws.com/:path*/'
      }
    ]
  }
}

module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  webpack: {},
  rewrites
}
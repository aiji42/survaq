module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  redirects: async () => [
    {
      source: '/eyecamera',
      destination: 'https://survaq-store.com/products/eye-to-cam',
      permanent: true,
    },
  ]
}
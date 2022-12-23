// /** @type {import('next').NextConfig} */
// const nextConfig = {

module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
      },
  swcMinify: true,
  basePath: '/dist',
  compress: true,
  async redirects(){
    return[
      {
        source: '/hola',
        destination: '/hello',
        permanent:  true,
      }
    ]
  }
}

module.exports = nextConfig

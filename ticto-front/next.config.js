/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig:{
        API_URL: process.env.API_URL,
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_API_URL: process.env.API_URL,
    },
    async rewrites() {
        return [
          {
            source: '/registros/:path*',
            destination: 'http://127.0.0.1:8000/registros:path*',
          },
        ]
      },
}

module.exports = nextConfig

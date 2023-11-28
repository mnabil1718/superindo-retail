/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'superindo-retail-api.vercel.app',
                port: '',
                pathname: '/products/**',
            },
        ],
    },
}

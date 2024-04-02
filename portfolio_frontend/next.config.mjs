/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['img.shields.io', 'github-readme-stats.vercel.app', 'localhost']
    },
    env: {
        backend_api_address: 'http://localhost:8080'
    }
};

export default nextConfig;

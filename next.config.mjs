/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['next-mdx-remote'],
    images: {
        domains: ['skillicons.dev'], // 在这里添加允许的图像域
    },
}

export default nextConfig;

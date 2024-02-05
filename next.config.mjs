/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com"
            },
            {
                protocol: "https",
                hostname: "unsplash.com"
            },
            {
                protocol: "https",
                hostname: "youtube.com"
            }
        ]
    }
};

export default nextConfig;

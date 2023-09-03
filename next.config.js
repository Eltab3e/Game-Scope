/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: false,
        },
    },
    images: {
        domains: ["media.rawg.io"],
    },
};

module.exports = nextConfig;

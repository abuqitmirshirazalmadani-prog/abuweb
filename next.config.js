/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://*.google.com https://*.aistudio.google.com https://ais-*.run.app https://*.vercel.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

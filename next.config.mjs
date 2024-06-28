/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "posts-jcdev.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

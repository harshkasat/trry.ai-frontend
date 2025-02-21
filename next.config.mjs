/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
    BASE_API_URL: process.env.BASE_API_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;

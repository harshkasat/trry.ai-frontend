/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_REDIRECT_URI: process.env.REDIRECT_URI,
    NEXT_PUBLIC_BASE_API_URL: process.env.BASE_API_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    domains:['images.unsplash.com', 'lh3.googleusercontent.com'],
  },

};

export default nextConfig;

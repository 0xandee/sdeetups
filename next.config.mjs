/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["images.unsplash.com", "tailwindui.com", "res.cloudinary.com"],
    }  
};

export default nextConfig;

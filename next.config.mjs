/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "res.cloudinary.com", // Replace with your actual domain(s)
      },
    ],
  },
};

export default nextConfig;

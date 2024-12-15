/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'firebasestorage.googleapis.com',  // For Firebase storage URLs
          'storage.googleapis.com',          // For Google Cloud Storage URLs
        ],
      },
};

export default nextConfig;

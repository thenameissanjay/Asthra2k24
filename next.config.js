/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
  images: {
      domains: ['images.unsplash.com', 'media.istockphoto.com', 'images.inc.com', 'us.123rf.com','i.postimg.cc','th.bing.com','www.bing.com','famousfile.com','imageio.forbes.com','encrypted-tbn0.gstatic.com','firebasestorage.googleapis.com'], // Add 'us.123rf.com' to the domains array
      loader: 'default', // Use 'default' loader to handle external domains and query parameters
  },
};
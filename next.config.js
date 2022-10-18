/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
module.exports = withPlugins(
    [
      [
        withOptimizedImages,
        {
          // / config for next-optimized-images /
          optimizeImages: false,
          // your config for other plugins or the general next.js here...
        },
      ],
    ],
    {
      trailingSlash: false,
    },

);

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://expeditionsconnect.com/',
  },
}

module.exports = withImages()

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/*Netlify settings*/
module.exports = {
  // other exports
  target: 'serverless', // add this line
};
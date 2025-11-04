/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  distDir: "build",
  output: 'standalone'
};

export default nextConfig;
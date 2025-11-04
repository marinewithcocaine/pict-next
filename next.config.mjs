/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  distDir: "build",
  output: 'export'
};

export default nextConfig;
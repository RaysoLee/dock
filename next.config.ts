export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  webpack(config: any, { isServer }: { isServer: boolean }) {
    // 如果是客户端构建，进行压缩
    if (!isServer) {
      config.optimization.splitChunks.maxSize = 2000000;  // 设置拆分的 chunk 文件大小
    }
    return config;
  },
  // output: 'export',
};

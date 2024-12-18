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
    console.log('Webpack config=========', config);
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',   // 适用于所有 chunk
        maxSize: 2000000, // 设置最大 chunk 大小
        minSize: 1000000, // 设置最小 chunk 大小，防止过小的 chunk
      }  // 设置拆分的 chunk 文件大小
      console.log('Max Chunk Size:+++++++++++++', config.optimization.splitChunks.maxSize);
    }
    return config;
  },
};

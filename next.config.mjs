/** @type {import('next').NextConfig} */



const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
    experimental: {
        serverActions: {
          allowedOrigins: [
            'localhost:3000',
            'https://legendary-guide-qj56g5qr7gqfp56.github.dev/',
            'https://yarr-temp-v2.vercel.app',
            'legendary-guide-qj56g5qr7gqfp56-3000.app.github.dev'
          ]
        }
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.cloudinary.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            port: '',
            pathname: '**',
          },
        ],
      },
    
};


export default nextConfig;

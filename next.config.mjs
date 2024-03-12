/** @type {import('next').NextConfig} */



const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            'localhost:3000',
            'https://legendary-guide-qj56g5qr7gqfp56.github.dev/',
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

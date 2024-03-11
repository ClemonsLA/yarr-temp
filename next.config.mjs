/** @type {import('next').NextConfig} */



const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            'localhost:3000',
            '72.20.140.35',
            'https://72.20.140.35',
            'rr-v2-q9ybpm1tc-cv-2-nft-main.vercel.app',
            'https://rr-v2-q9ybpm1tc-cv-2-nft-main.vercel.app',
            'solid-space-telegram-4j7xw57jjj7hqwv-3000.app.github.dev',
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        // Block indexing for /private and its subroutes
        {
          source: '/private/:path*', // Matches /private and everything under it
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex, nofollow', // Prevents indexing and following links
            },
          ],
        },
        // Allow indexing for all other public routes
        {
          source: '/:path*', // Matches all other routes
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'index, follow', // Allows indexing and following links
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  
export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/', '/projects', '/blog', '/blog/*', '/contact'],
        disallow: '/private/',
      },
      sitemap: 'https://atrinshahroudi.com/sitemap.xml',
    }
  }
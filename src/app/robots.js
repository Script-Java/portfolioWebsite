export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/', '/projects'],
        disallow: '/private/',
      },
      sitemap: 'https://atrinshahroudi.com/sitemap.xml',
    }
  }
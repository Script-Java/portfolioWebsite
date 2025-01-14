export default function sitemap() {

    const currentDate = new Date().toISOString();
    return [
      {
        url: 'https://atrinshahroudi.com',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://atrinshahroudi.com/projects',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://atrinshahroudi.com/contact',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://atrinshahroudi.com/blog',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://atrinshahroudi.com/blog/why-isnt-my-website-ranking-on-google',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://atrinshahroudi.com/blog/benefits-of-hiring-a-web-developer',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://atrinshahroudi.com/blog/why-is-an-online-presence-important',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://atrinshahroudi.com/blog/why-your-business-needs-a-website',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      
    ]
  }
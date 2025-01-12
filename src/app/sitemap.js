export default function sitemap() {
    return [
      {
        url: 'https://atrinshahroudi.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://atrinshahroudi.com/projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },

    ]
  }
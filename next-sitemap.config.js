/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://atrinshahroudi.com", // Replace with your website's URL
    generateRobotsTxt: true, // Generate robots.txt file
    changefreq: "daily", // Optional: Frequency of page changes
    priority: 0.7, // Optional: Default priority of pages
    sitemapSize: 5000, // Optional: Split sitemap files if >5000 URLs
    exclude: ["/private/*"], // Exclude specific routes
    robotsTxtOptions: {
      additionalSitemaps: [
        "https://atrinshahroudi.com/sitemap.xml", // Add additional sitemaps if any
      ],
    },
  };
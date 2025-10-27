/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.paremklikk.ee',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
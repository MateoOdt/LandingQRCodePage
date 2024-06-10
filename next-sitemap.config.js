// next-sitemap.js

module.exports = {
  siteUrl: "https://landing-qr-code-page.vercel.app/",
  generateRobotsTxt: true, //
  robotsTxtOptions: {
    policies: [{ userAgent: "*", disallow: "/noindex" }],
  },
};

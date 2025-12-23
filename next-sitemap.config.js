module.exports = {
  // REQUIRED: add your own domain name here
  // Uses SITE_URL env var if set, otherwise VERCEL_URL for preview deployments, or falls back to production domain
  siteUrl: process.env.SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://zhangdongarchitecture.com"),
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard). By default, NextJS app router metadata files are excluded (https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
};

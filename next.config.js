/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "tcproduction.blob.core.windows.net",
      "d2ru2mvuh5wx24.cloudfront.net",
      "www.niagarafallsstatepark.com",
      "assets.simpleviewcms.com",
      "s3.amazonaws.com",
      "footwearnews.com"
    ]
  }
}

module.exports = nextConfig;

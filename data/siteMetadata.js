/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Telcotank | Transformation Strategy & Consulting for Telecom, AI & Digital Economy',
  author: 'Telcotank',
  headerTitle: 'Telcotank',
  description:
    'Telcotank is a transformation strategy and management consulting firm. We help telecom operators, financial institutions, technology companies and investors with digital transformation, AI strategy, growth acceleration and market entry across 20+ countries since 2004.',
  language: 'en-us',
  theme: 'light',
  siteUrl: 'https://telcotank.com',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/telcotank-logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'info@telcotank.com',
  linkedin: 'https://www.linkedin.com/company/telcotank',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: '',
  },
  comments: {
    provider: '',
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata

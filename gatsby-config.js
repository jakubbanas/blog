module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `Jakub Banaś`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/kuba792`,
      },
      {
        name: `github`,
        url: `https://github.com/jakubbanas`,
      },
    ],
  },
}

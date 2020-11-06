module.exports = {
  siteMetadata: {
    description: "Personal page of Akhilesh Gupta",
    locale: "en",
    title: "Akhilesh Gupta",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "bright-orange",
      },
    },
  ],
};

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: "https://test.greenfieldmc.net",
    title: "GreenfieldMC",
  },
  plugins: ["gatsby-plugin-sitemap", "gatsby-plugin-sass", "gatsby-plugin-preload-fonts", "gatsby-plugin-image", "gatsby-plugin-cname",{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Greenfield Minecraft",
      short_name: "GreenfieldMC",
      start_url: "/",
      //background_color: "#6b37bf",
      //theme_color: "#6b37bf",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: "src/images/logo_background.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
    }
  }],
};

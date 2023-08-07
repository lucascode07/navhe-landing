import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Navhe Delivery`,
    description: `Sitio web de Navhe Delivery, empresa de delivery peruana`,
    author: `Navhe`,
    siteUrl: `https://navhe-delivery-landing.netlify.app/`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Navhe Delivery",
        start_url: "/",
        background_color: "#541cf9",
        theme_color: "#541cf9",
        icon: `src/assets/images/navhe-favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          "/nosotros/",
          "/reclutamiento/",
          "/funcionamiento/",
          "/soporte/",
          "/terminos-generales/",
          "/terminos-generales/*",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://navhe-delivery-landing.netlify.app/`,
        sitemap: `https://navhe-delivery-landing.netlify.app/sitemap-index.xml`,
        policy: [
          {
            userAgent: "*",
            disallow: [
              "/nosotros/",
              "/reclutamiento/",
              "/funcionamiento/",
              "/soporte/",
              "/terminos-generales/*",
            ],
            allow: [
              "/nosotros/*",
              "/reclutamiento/*",
              "/funcionamiento/*",
              "/soporte/*",
            ],
          },
        ],
      },
    },
  ],
};

export default config;

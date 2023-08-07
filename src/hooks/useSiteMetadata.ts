import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadata } from "../interfaces/seo.interface";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      allFile(filter: { name: { eq: "navhe-og-image" } }) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);

  return {
    ...data.site.siteMetadata,
    ogImage: data.allFile.nodes[0].publicURL,
  } as SiteMetadata;
};

export default useSiteMetadata;

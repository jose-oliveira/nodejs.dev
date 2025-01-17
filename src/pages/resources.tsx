import { graphql } from 'gatsby';
import ArticleLayout from '../components/Layout/article';
import { SideNavBarKeys } from '../components/SideNavBar';
import connectGraphQlArticle from '../components/connectGraphQlArticle';

export default connectGraphQlArticle(ArticleLayout, {
  editPath: 'content/resources/resources.md',
  sidenavKey: SideNavBarKeys.resources,
});

export const query = graphql`
  query ($locale: String!, $defaultLocale: String!) {
    articleCurrentLanguage: mdx(
      fields: { slug: { eq: "resources" }, locale: { eq: $locale } }
    ) {
      body
      tableOfContents
      frontmatter {
        title
        description
      }
      fields {
        authors
      }
    }
    articleDefaultLanguage: mdx(
      fields: { slug: { eq: "resources" }, locale: { eq: $defaultLocale } }
    ) {
      body
      tableOfContents
      frontmatter {
        title
        description
      }
      fields {
        authors
      }
    }
  }
`;

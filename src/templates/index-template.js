// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {


  return (
    <Layout>
      <Sidebar isIndex />
      <Page>

        <h1>hello.</h1>
        <h2>I am a Full Stack Web Developer and focused team player with solid capacity for collaboration.</h2>
        <p>Technologies I ♥️ to work with: JavaScript, Python, Node.js, Express, React, SQL, MongoDB, Graphql, Jest, Testing Library and many more! </p>
        <a href="https://docs.google.com/document/d/1Eg7KJ5PLl8Xq0VUJCS5F1yPwfWI8yDYDRe0E830xE0g/edit">resume</a>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;

export default IndexTemplate;

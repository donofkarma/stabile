import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layouts";

class ComponentTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
      <Layout>
        <article>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Layout>
    );
  }
}

export default () => {
  <StaticQuery
    query={graphql`
      query($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
          frontmatter {
            title
          }
          html
        }
      }
    `}
    render={data => <ComponentTemplate data={data} />}
  />;
};

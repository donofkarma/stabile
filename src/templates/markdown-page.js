import React from "react";

export default class ComponentTemplate extends React.Component {
    render() {
        const { data } = this.props;
        const { markdownRemark } = data;
        const { frontmatter, html } = markdownRemark;

        return (
            <article>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        );
    }
}

export const pageQuery = graphql`
    query ComponentQuery($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            frontmatter {
                title
            }
            html
        }
    }
`;

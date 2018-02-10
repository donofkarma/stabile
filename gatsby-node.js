/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// create the urls for each document page
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({
            node,
            getNode,
            basePath: ""
        });

        createNodeField({
            node,
            name: "slug",
            value: slug
        });
    }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        const MarkdownPageTemplate = path.resolve(
            "src/templates/markdown-page.js"
        );

        resolve(
            graphql(`
                {
                    allMarkdownRemark {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                }
                                html
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    createPage({
                        path: node.fields.slug,
                        component: MarkdownPageTemplate
                    });
                });

                // suppresses promise warning but still creates pages
                return null;
            })
        );
    });
};

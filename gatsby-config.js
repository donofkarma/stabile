module.exports = {
    siteMetadata: {
        title: "Stablie"
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-netlify",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-react-next",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages/`
            }
        },
        "gatsby-transformer-remark"
    ]
};

// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'FIRST Alumni Association at NC State',
    plugins: [
        // this plugin loads only the leadership information
        {
            use: '@gridsome/source-filesystem',
            options: {
                baseDir: "./content",
                path: './leadership.yml',
                typeName: "Leadership"
            }
        },
        // this does the heavy lifting and renders the html / vue markdown hybrid
        {
            use: "@gridsome/vue-remark",
            options: {
                typeName: "Content",
                baseDir: "./content/md",
                pathPrefix: "/",
                remark: {
                    autolinkClassName: "fas fa-hashtag header-anchor",
                    autolinkHeadings: false
                }
            }
        },
        // this imports and parses all information about this md file,
        // but we'll only use this for headers. This is a bit redundant
        // when we use above, but we'll query one specific GQL item from here
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './content/md/index.md',
                typeName: "Homepage"
            }
        }
    ]
}
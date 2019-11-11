// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'FIRST Alumni Association at NC State',
    plugins: [{
        use: '@gridsome/source-filesystem',
        options: {
            baseDir: './content/home',
            path: '*.md'
        }
    }]
}
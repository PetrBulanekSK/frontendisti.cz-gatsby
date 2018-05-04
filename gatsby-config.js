module.exports = {
	siteMetadata: {
		title: 'Frontendisti.cz',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-stylus',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
	],
};

module.exports = {
	plugins: [
		[
			"postcss-preset-env",
			{
				browsers: "last 2 versions",

				// See more at: https://cssdb.org/
				stage: 3,
				features: {
					"nesting-rules": true,
					"custom-selectors": true,
				},
				// importFrom: "src/css/settings/custom-selectors.css",
			},
		],
		[
			"postcss-mixins",
			{
				// mixinsFiles: "src/css/settings/mixins.css",
			},
		],
	],
};

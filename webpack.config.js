const path = require("path");
const dotenv = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: [
		"@babel/polyfill",
		path.resolve(__dirname, process.env.PATH_SOURCES, "index.js"),
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, process.env.PATH_DESTINATION)
	},
	watch: false,
	devtool: "eval-source-map",
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		}]
	},
	resolve: {
		modules: [
			path.resolve(process.env.PATH_SOURCES),
			path.resolve("./node_modules")
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
	]
};
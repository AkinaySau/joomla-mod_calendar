'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
	filename: "main.css"
});
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './assets'),
		publicPath: '/assets/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': extractSass.extract({
							use: [
								'vue-style-loader',
								{
									loader: 'css-loader',
									options: {
										importLoaders: 1
									}
								},
								{
									loader: 'postcss-loader',
									options: {
										ident: 'postcss',
										plugins: (loader) => [
											require('postcss-import')({root: loader.resourcePath}),
											require('postcss-cssnext')(),
											autoprefixer({
												browsers: ['Chrome >= 35',
													'Firefox >= 38',
													'Edge >= 12',
													'Explorer >= 10',
													'iOS >= 8',
													'Safari >= 8',
													'Android 2.3',
													'Android >= 4',
													'Opera >= 12'],
												cascade: true,
												add: true,
												remove: true

											}),
											require('cssnano')
										]

									}
								},
								'sass-loader',
								'resolve-url-loader'
							]
						}),
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
				}
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
						fallback: 'style-loader',
						use: ["css-loader", {
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer({
										browsers: ['ie >= 8', 'last 4 version']
									})
								],
								sourceMap: true
							}
						}, 'sass-loader', "resolve-url-loader"]
					}
				)
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../dist/',
							outputPath: 'images/'
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../dist/',
							outputPath: 'media/'
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../dist/',
							outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	plugins: [
		new ExtractTextPlugin("main.css"),

		// ************************************* //
		// new webpack.optimize.UglifyJsPlugin({minimize: true, compress:true}),
		new OptimizeCssAssetsPlugin({}),
		// ************************************* //
		extractSass,
		// ************************************* //
		// new webpack.ProvidePlugin({
		//     '_': 'lodash',
		//     'Sau': ['/var/www/html/sau/vue/nicGen/lib/Sau.js']
		// })
	],
	devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		// new webpack.optimize.UglifyJsPlugin({
		//     sourceMap: true,
		//     compress: {
		//         warnings: false
		//     }
		// }),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
	src: path.join(__dirname, "../src"),
	dist: path.join(__dirname, "../dist"),
	assets: "assets/"
}

module.exports = {
	externals : { paths: PATHS },
	entry: { app: PATHS.src },
	output: {
		filename: '[name].bundle.js',
		path: PATHS.dist,
		publicPath : '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: '/node_modules/',
					chunks: 'all',
					enforce: true,
				}
			}
		}
	},
	module: {
		rules : [
			{
				test: /\.js$/,
	      		exclude: [ /(node_modules|dist)/, ],
	      		loader: 'eslint-loader',
      		},
      		{
		      test: /\.(png|jpe?g|gif|svg|webp)$/i,
		      loader: 'file-loader',
		      options: { name: '[name].[ext]' }
		    },
      	]
	},
	plugins: [
		new CleanWebpackPlugin(),
	    new CopyPlugin({
	      patterns: [
	        { from: `${PATHS.src}/${PATHS.assets}images`, to: `${PATHS.assets}images` },
	      ],
	    }),
	    new HtmlWebpackPlugin({
	      template: `${PATHS.src}/index.html`,
	      filename: './index.html'
	    })
	  ],
};

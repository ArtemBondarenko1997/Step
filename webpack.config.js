const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: { entry1: './src/main.js', entry2: './src/main_p2.js'},
    output: {
		filename: '[name].js'
    },
    module: {
    	rules: [
    		{
    			test: /\.css$/,
    			use: [
	    			{
						loader: MiniCssExtractPlugin.loader
	    			},
	    			'css-loader'
    			]
    		}
    	]
    },
    plugins: [
    	new HtmlWebpackPlugin({
			filename: 'page1.html',
			template: './src/page1.html',
			chunks: ['entry1']
    	}),
		new HtmlWebpackPlugin({
			filename: 'page2.html',
			template: './src/page2.html',
			chunks: ['entry2']
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			template: './src/style.css',
		})
    ]
}
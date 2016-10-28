module.exports = {
	entry: './src/main.js',
	devtool: 'source-map',
	output: {
		path: __dirname,
		filename: 'br3akout.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'],
			},
		}],
	},
};

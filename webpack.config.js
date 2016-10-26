const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'br3akout.js',
	},
	module: {
		loaders: [{
			test: path.join(__dirname, 'src'),
			loader: 'babel-loader',
		}],
	},
};

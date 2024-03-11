const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/run.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'run.js',
	},
	target: 'node',
};
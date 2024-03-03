const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'functions'),
		publicPath: '/',
		filename: 'run.js',
	},
	target: 'node',
};
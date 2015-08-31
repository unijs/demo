var path = require('path');
var unijsBundle = require('unijs-bundle');

unijsBundle({
	entryFile: require.resolve(path.join(__dirname, 'client', 'js', 'main.js')),
	swappers: [],
	transformers: [require.resolve('./babelTransformer.js')]
});

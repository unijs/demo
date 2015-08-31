var babel = require('babel-core');

module.exports = function(transformerObject) {
	transformerObject
	var result = babel.transform(transformerObject.src);
	/*result.code;
	result.map;
	result.ast;*/
   return result.code;
}

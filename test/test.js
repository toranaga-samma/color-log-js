var sinon 		= require ('sinon');
var assert 		= require ('assert');
var log 		= require ('../index.js');

describe ("All methods", function () {
	it ("Provides all needed methods", function () {
		assert.equal (typeof log.debug, "function");
		assert.equal (typeof log.info, "function");
		assert.equal (typeof log.error, "function");
		assert.equal (typeof log.none, "function");
	})
})
/**
@fileOverview
Some additional array/object functions that lodash doesn't seem to have..

@module array
@class array

@toc
//public
0. testColor
//private
*/

'use strict';
var colors = require('colors');
var self;

/**
@param {Object} opts
*/
function Colors(opts) {
	self =this;
}


Colors.prototype.testColor =function(params) {
	console.log(params.bold.red); // outputs green text
};


module.exports = new Colors({});
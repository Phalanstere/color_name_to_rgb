'use strict';

var csscolors = require('css-color-names');
var hexToRgb = require('hex-to-rgb');
var util     = require('util');


// FUNCTIONS //
var hex;

function check_colorname(str) {
	var val;
	for (var name in csscolors) 
		{
		if (str === name){
			hex = csscolors[name];
			val = hexToRgb(hex);
			return val;
			}
		}
	return null;
}

function get_format(val, format) {
	var ret;
	
	switch(format)
	 {
	 case "rgb":
	 	ret = "rgb(" + val[0] + "," + val[1] + "," + val[2] + ")";
	 break; 
	 
	 case "rgba":
	 	ret = "rgb(" + val[0] + "," + val[1] + "," + val[2] + ",1 )";
	 break;
	 
	 case "array":
	   ret = val;
	 break;
	 
	 case "hex":
	  ret = hex;
	 break;
	 
	 case "object":
	   ret = {
	   		r: val[0],
	   		g: val[1],
	   		b: val[2]
	   		}
	 break;
	 
	 default:
	 	ret = "rgb(" + val[0] + "," + val[1] + "," + val[2] + ")";
	 break; 	
	 }	

return ret;
}



function color(name, format) {
	var val = check_colorname(name);
	if (val) {
	  if (format) {
	  	return get_format(val, format);	
	  }
	  else return "rgb(" + val[0] + "," + val[1] + "," + val[2] + ")"; 
	  } 
	else return null;
		
};

 module.exports = exports = color;


var c = color("gold", "hex");
console.log( util.inspect(c));

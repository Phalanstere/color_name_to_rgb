# color_name_to_rgb
converts an html color name to a format of your choice

#Installation

```javascript
	npm install color_name_to_rgb
```

#Usage

First you require the library:

```javascript
	var color = require("color_name_to_rgb");
```

Invoking is easy. You just write: 
 
```javascript
	var output = color("gold");
```

The output will be:

```javascript
	var output = 'rgb(255,215,0)';
```

As a default the function returns a **rgb string**.
But you can define your format too:


```javascript
	var output = color("gold", "hex");
	// output = ''#ffd700'';
	
	var output = color("gold", "rgba");
	// output 'rgb(255,215,0,1 )'
	
	var output = color("gold", "array");
	// output [255, 215, 0, 1]
	
```



Valid formats are **rgb**, **rgba**, **hex**, **array**, **object**

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

Invoking it is easy. You may just write: 
 
```javascript
	output = color("gold");
```

The output will be:

```javascript
	output = 'rgb(255,215,0)';
```

As a default the function returns a rgb string.
But you can define your format too:


```javascript
	output = color("gold", "hex");
```

Then the output is:

```javascript
	output = ''#ffd700'';
```

Valid formats are **rgb**, **rgba**, **hex**, **array**, **object**

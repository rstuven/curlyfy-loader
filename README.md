curlyfy-loader
==============

> Add curly brackets to a whitespace indented module using [curlyfy](https://github.com/rstuven/curlyfy);

Install
-------

``` shell
npm install --save-dev curlyfy-loader
```

Usage
-----

It should be used in tandem with a curly language loader:

``` javascript
var jsmodule = require("babel!curlyfy!./module.js.noncurly");
var tsmodule = require("typescript!curlyfy!./module.ts.noncurly");
```

Or within the webpack config:

``` javascript
module: {
  loaders: [
    { test: /\.js\.noncurly$/, exclude: /node_modules/, loader: 'babel!curlyfy'},
    { test: /\.ts\.noncurly$/, exclude: /node_modules/, loader: 'typescript!curlyfy'}    
  ]
}
```

and then require normally:

``` javascript
var jsmodule = require("./module.js.noncurly");
var tsmodule = require("./module.ts.noncurly");
```

See webpack docs: [Using loaders](http://webpack.github.io/docs/using-loaders.html)


Options
-------

See the [curlyfy options](https://github.com/rstuven/curlyfy#options)


License
-------

MIT (http://www.opensource.org/licenses/mit-license.php)

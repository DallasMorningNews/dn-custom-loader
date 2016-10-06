## What this is?

It's a custom loading animation that can be used to cover your page while it loads or while data is being loaded in from somewhere else. It's really up to you.

## Using the script

### With NPM

```
npm install dnpolyloader
```

```javascript
var $ = require('jquery');
require('dnpolyloader');
```

### To use with interactives template

Place in your build/images folder:_dmn_d.svg, _dmn_polygon.png

Place in your build/js folder: +loader.js

Place in your build/sass folder: +loader.scss

Then call the `dnLoader` function on the `body` element. The `dnLoader` function accepts two arguments: `display` and `remove`.

```javascript
// do something that requires a loading animation
$(".get-data-button").click(function() {
    $("body").dnLoader("display");
    $.getJSON("data.js").done(function(data) {
        $("body").dnLoader("remove");
        console.log(data);
    });
});
```

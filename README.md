## What this is?

It's a custom loading animation that can be used to cover your page while it loads or while data is being loaded in from somewhere else. It's really up to you.

## How to use it

Include the javascript and style sheet, then call the `dnLoader` function on the `body` element. The `dnLoader` function accepts two arguments: `display` and `remove`.

For example:

```javascript
// do something that requires a loading animation
$(".get-data-button").click(function() {
    $("body").dnLoader("display");
    $.getJSON("data.js").done(function(data) {
        $("body").dnLoader("remove");
        console.log(data);
    })
})
```

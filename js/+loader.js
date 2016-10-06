// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.dnLoader = function(action) {

        var self = this;

        //our loader html
        var loader = "<div class='dn-loader-block'><figure class='dn-loader-logo'><img class='dn-loader-polygon' src='images/_dmn_polygon.png' alt='blue polygon' /><img class='dn-loader-d' src='images/_dmn_d.svg' alt='dallas news d' /></figure></div>";

        // placeholder variable that will hold the body's initial position value
        var bodyPosition = "";

        // if displaying the loader ...
        if (action === "display") {

            // grab the body's current position
            bodyPosition = self.css("position");

            // add our no-scroll class, set the position to relative, and append the loader
            self.addClass("no-scroll").css("position", "relative").append(loader);
        }

        // if removing the loader
        if (action === "remove") {
            // remove the no-scroll class from the body, reset the body's position value, and remove the loader
            self.removeClass("no-scroll").css("position", bodyPosition).find($(".dn-loader-block")).remove();
        }
    };
}));

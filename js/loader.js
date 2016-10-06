(function($) {

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

}(jQuery));

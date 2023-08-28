$(document).ready(function() {
    $(window).scroll(function() {
        var scrollVision = $(window).scrollTop();
        var backgroundPosition = "center " + (scrollVision / 2) + "px";

        $(".startup").css({
            "background-position": backgroundPosition
        });
    });
});

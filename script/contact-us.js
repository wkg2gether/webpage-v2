$(document).ready(function() {
    $(window).scroll(function() {
        var scrollVision = $(window).scrollTop();
        $(".startup").css({
            "background-size": (1 + scrollVision / 1500) * 100 + "%",
            "background-position": "center " + (-scrollVision / 100) + "px, " + (scrollVision / 100) + "px center"
        });
    });
});

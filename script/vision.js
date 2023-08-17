//vision page animations
$(document).ready(function() {
    $(window).scroll(function() {
        var newScrollVision = $(window).scrollTop();
        //story background image animation
        $(".story-title").css({
            "background-position-x": newScrollVision / 25 + "%"
        });

        //leadership background image animation
        $(".leadership-title").css({
            "background-position-x": newScrollVision / 25 + "%"
        });

        //header image animation
        $(".header-img").css({
            transform: "scale(" + (1 + newScrollVision / 1000) + ", 1)"
        });
    });
});
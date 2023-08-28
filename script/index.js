$(document).ready(function() {
    //index image zoom in and out while scrolling
    if (window.location.pathname.split("/").pop() == "index.html" || !window.location.pathname.split("/").pop()) {
        var imageOffset = $(".background-img").offset().top;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll < imageOffset + 50) {
                $(".background-img").css({
                    zoom: (scroll + imageOffset) / 1500,
                    transition: "opacity 0.7s ease-in-out "
                });
            }
        });
    }

    //text-cards hover animation
    $(".text-cards .text-block-5, .text-cards .img, .text-cards .text-block-6, .text-cards .text-block-7").each(function() {
        var element = $(this);
        element.hover(
            function() {
                element.addClass("hovered");
            },
            function() {
                element.removeClass("hovered");
            }
        );
    })
});
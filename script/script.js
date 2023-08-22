$(document).ready(function() {
    //page fade-in animation
    $(".page-wrapper").css("opacity", 1);

    //page fade-out animation
    $("a").click(function(e) {
        if($(e.target).attr("href") == undefined || $(e.target).attr("href") == window.location.pathname.split("/").pop() != "index.html") return;
        e.preventDefault();
        $(".page-wrapper").css("opacity", 0);
        setTimeout(function() {
            window.location.href = $(e.target).attr("href");
        }, 300);
    });

    //header fade-in and fade-out animation
    var scroll = $(window).scrollTop();

    $(window).scroll(function() {
        var newScroll = $(window).scrollTop();
        if (newScroll > scroll + 10) {
            var opacity = Math.max(0, 1 - (newScroll - scroll) / 10);
            $(".header").css("opacity", opacity);
            $(".panel").css("opacity", opacity);
            $(".panel").css("transition", "opacity 0.5s ease-in-out");
        } else if (newScroll < scroll - 10) {
            var opacity = Math.min(1, 0.4 + (scroll - newScroll) / 10);
            $(".header").css("opacity", opacity);
            $(".panel").css("opacity", opacity);
            setTimeout(function() {
                $(".panel").css("transition", "right 1s");
            }, 500);
        }
        scroll = newScroll;
    });

    //footer button (scroll to top or go to index.html)
    $(".company-name").click(function() {
        if (window.location.pathname.split("/").pop() != "index.html") {
            window.location.href = "index.html";
        } else {
            $("html, body").animate({
                scrollTop: 0
            }, {
                duration: 1500
            });
        }
    });

        $("#hamburger").click(function () {
          $(this).toggleClass("open");
          $("#panel").toggleClass("open");
        });
});
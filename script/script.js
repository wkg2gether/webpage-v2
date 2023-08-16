$(document).ready(function() {
    var scroll = $(window).scrollTop();
    
    $(window).scroll(function() {
      var newScroll = $(window).scrollTop();
      
      if (newScroll > scroll + 15) {
        var opacity = Math.max(0, 1 - (newScroll - scroll) / 15);
        $("header").css({
          opacity: opacity,
          transition: "opacity 0.3s ease-in-out"
        });
      } else if (newScroll < scroll - 15) {
        var opacity = Math.min(1, 0.4 + (scroll - newScroll) / 15);
        $("header").css({
          opacity: opacity,
          transition: "opacity 0.3s ease-in-out"
        });
      }
      scroll = newScroll;
    });
  });

$(document).ready(function() {
  $(window).scroll(function() {
    var newScroll = $(window).scrollTop();
    $(".story-title").css({
      "background-position-x": newScroll / 25 + "%",
      transition: "background-position-x ease-in"
    });

    $(".leadership-title").css({
      "background-position-x": newScroll / 25 + "%",
      transition: "background-position-x ease-in"
    });

    $(".header-img").css({
      transform: "scale(" + (1 + newScroll / 1000) + ", 1)",
      transition: "transform 0.5 ease-in"
    });
  });
});

  $(document).ready(function() {
    if(window.location.pathname.split("/").pop() == "index.html") {
    var imageOffset = $(".background-img").offset().top;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if(scroll < imageOffset + 50) {
      $(".background-img").css({
        zoom: (scroll + imageOffset) / 1500,
        transition: "opacity 0.7s ease-in-out "
      });
    }
    });
  }
  });

  $(document).ready(function() {
    $(".company-name").click(function() {
      if(window.location.pathname.split("/").pop() != "index.html") {
        window.location.href = "index.html";
      } else {
      $("html, body").animate({
        scrollTop: 0
      }, {
        duration: 1500
        });
      }
    });
  });
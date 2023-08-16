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
  });

  $(document).ready(function() {
    $(".company-name").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, {
        duration: 1500
        });
    });
  });

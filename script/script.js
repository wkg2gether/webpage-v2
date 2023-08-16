$(document).ready(function() {
    $(".page-wrapper").css("opacity", 1);
});

$(document).ready(function() {
    $("a").click(function(e) {
      e.preventDefault(); 
      $(".page-wrapper").css("opacity", 0);
      setTimeout(function() {
        window.location.href = $(e.target).attr("href");
      }, 300); 
    });
  });

$(document).ready(function() {
  var scroll = $(window).scrollTop();

  $(window).scroll(function() {

      if (window.location.pathname.split("/").pop() == "vision.html") {
          var newScrollVision = $(window).scrollTop();
          $(".story-title").css({
              "background-position-x": newScrollVision / 25 + "%"
          });

          $(".leadership-title").css({
              "background-position-x": newScrollVision / 25 + "%"
          });

          $(".header-img").css({
              transform: "scale(" + (1 + newScrollVision / 1000) + ", 1)"
          });
      }


      var newScroll = $(window).scrollTop();

      if (newScroll > scroll + 15) {
          var opacity = Math.max(0, 1 - (newScroll - scroll) / 15);
          $(".header").css("opacity", opacity);
      } else if (newScroll < scroll - 15) {
          var opacity = Math.min(1, 0.4 + (scroll - newScroll) / 15);
          $(".header").css("opacity", opacity);
      }
      scroll = newScroll;
  });
});

$(document).ready(function() {
  if (window.location.pathname.split("/").pop() == "index.html") {
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
});

$(document).ready(function() {
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
});
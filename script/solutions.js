$(document).ready(function() {
  var visibleElements = [];

  // combine scroll event listeners
  $(window).scroll(function() {
      debounce(checkVisibility, 100);
  });


  // function to debounce scroll events
  var timeout;

  function debounce(func, delay) {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay);
  }

  function checkVisibility() {
      $("td h2, td p, td img").each(function() {
          var element = $(this);
          var offsetTop = element.offset().top;
          var windowHeight = $(window).height();
          var scrollTop = $(window).scrollTop();
          var elementBottom = offsetTop + element.outerHeight();
          var screenWidth = $(window).width();

          var isVisible = (offsetTop <= (scrollTop + windowHeight)) && (elementBottom >= scrollTop);

          if (isVisible) {
              if (visibleElements.indexOf(element) === -1) {
                  element.css("opacity", "1");
                  if (element.is("img")) {
                        screenWidth < 1000 ? element.addClass("slide-in-top") : element.addClass("slide-in-left");
                  } else {
                      element.addClass("slide-in-left");
                  }
                  visibleElements.push(element);
              }
          } else {
              if (visibleElements.indexOf(element) !== -1) {
                  element.removeClass("slide-in-left slide-in-bottom");
              }
          }
      });
  }
  // initial check for visibility
  checkVisibility();
});

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollVision = $(window).scrollTop();
        var backgroundPosition = "center " + (scrollVision / 2) + "px";

        $(".business").css({
            "background-position": backgroundPosition
        });
    });
});
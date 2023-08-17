$(document).ready(function() {
  var visibleElements = [];

  // combine scroll event listeners
  $(window).scroll(function() {
      debounce(checkVisibility, 100);
      headerImageAnimation();
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

          var isVisible = (offsetTop <= (scrollTop + windowHeight)) && (elementBottom >= scrollTop);

          if (isVisible) {
              if (visibleElements.indexOf(element) === -1) {
                  element.css("opacity", "1");
                  if (element.is("img")) {
                      element.addClass("slide-in-bottom");
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

  function headerImageAnimation() {
      var scrollVision = $(window).scrollTop();
      $(".business").css({
          "background-size": (1 + scrollVision / 1500) * 100 + "%",
          "background-position": "center " + (scrollVision / 10000) + "px"
      });
  }

  // initial check for visibility
  checkVisibility();
});
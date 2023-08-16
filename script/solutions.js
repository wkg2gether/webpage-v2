//table section fading in animation
$(document).ready(function() {
    var visibleElements = [];

    $(window).scroll(function() {
      checkVisibility();
    });

    function checkVisibility() {
      $("td h2, td p").each(function() {
        var element = $(this);
        var offsetTop = element.offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        var elementBottom = offsetTop + element.outerHeight();

        if ((offsetTop <= (scrollTop + windowHeight)) && (elementBottom >= scrollTop)) {
          if (visibleElements.indexOf(element) === -1) {
            element.css("opacity", "1");
            element.addClass("slide-in-left");
            visibleElements.push(element);
          }
        } else {
          if (visibleElements.indexOf(element) !== -1) {
            element.removeClass("slide-in-left");
          }
        }
      });

      $("td img").each(function() {
        var element = $(this);
        var offsetTop = element.offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        var elementBottom = offsetTop + element.outerHeight();

        if ((offsetTop <= (scrollTop + windowHeight)) && (elementBottom >= scrollTop)) {
          if (visibleElements.indexOf(element) === -1) {
            element.css("opacity", "1");
            element.addClass("slide-in-bottom");
            visibleElements.push(element);
          }
        } else {
          if (visibleElements.indexOf(element) !== -1) {
            element.removeClass("slide-in-bottom");
          }
        }
      });
    }

    checkVisibility();
  });

  //header image animation (stretch)
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollVision = $(window).scrollTop();
      $(".business").css({
        "background-size": (1 + scrollVision / 1500) * 100 + "%",
        "background-position": "center " + (scrollVision / 10000) + "px"
      });
    });
  });
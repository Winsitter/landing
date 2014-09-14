(function() {
  function addActiveClass(elem) {
    $(elem).addClass("active");
  }

  function clearAllActive() {
    $(".active").removeClass("active");
  }

  var currentPath = location.pathname;

  var pathFunctions = {
    'home': function() {
      clearAllActive();
      addActiveClass("#navHome");
    },
    'pricing': function() {
      clearAllActive();
      addActiveClass("#navPricing");
    },
    'about': function() {
      clearAllActive();
      addActiveClass("#navAbout");
    },
    'blog': function() {
      clearAllActive();
      addActiveClass("#navBlog");
    },
    'support': function() {
      clearAllActive();
      addActiveClass("#navSupport");
    }
  };

  if (currentPath == '/') {
    // set up scroll
    $(document).on("scroll", function() {
      var aboutVisible = $("#about").visible(true);
      var pricingVisible = $("#pricing").visible(false);

      if (pricingVisible) {
        pathFunctions['pricing']();
      } else if (aboutVisible) {
        pathFunctions['about']();
      } else {
        pathFunctions['home']();
      }

    });
    pathFunctions['home']();
  } else if (currentPath.indexOf('support') == 1) {
    pathFunctions['support']();
  } else if (currentPath.indexOf('blog') == 1 || $("#isBlog").val() == "isBlog") {
    pathFunctions['blog']();
  }

// scrollable menu fix in bootstrap 3.2.0, maybe fixed in 4.0
// This makes it a fixed menu
// https://github.com/twbs/bootstrap/issues/12738
// http://stackoverflow.com/questions/19227496/scrollable-menu-with-bootstrap-3-menu-expanding-its-container-when-it-should-n
$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

// hide navbar fixed menu on mobile when item is clicked
// https://github.com/twbs/bootstrap/issues/12852
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

})();

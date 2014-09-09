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
      if ($("#about").visible(true)) {
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
})();

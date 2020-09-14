// loads background image and message depending on time of day
function loadWelcomeScreen() {
  var time = new Date().getHours();

  if (time < 12) {
    document.getElementById("welcome").style.backgroundImage = "url(images/coffee.jpg)";
    document.getElementById("message").innerHTML = "Good Morning";
    document.getElementById("name").innerHTML = "I'm Spencer Hanson";
    document.getElementById("message").style.color = "#0D0D0D";
    document.getElementById("name").style.color = "#0D0D0D";
  } else if (time < 18) {
    document.getElementById("welcome").style.backgroundImage = "url(images/mountain.jpg)";
    document.getElementById("message").innerHTML = "Good Afternoon";
    document.getElementById("name").innerHTML = "I'm Spencer Hanson";
    document.getElementById("message").style.color = "#0D0D0D";
    document.getElementById("name").style.color = "#0D0D0D";
  } else {
    document.getElementById("welcome").style.backgroundImage = "url(images/space.jpg)";
    document.getElementById("message").innerHTML = "Good Evening";
    document.getElementById("name").innerHTML = "I'm Spencer Hanson";
    document.getElementById("message").style.color = "#E7E7E7";
    document.getElementById("name").style.color = "#E7E7E7";
  }
}

// highlights name of current section in navbar
$(window).on("scroll", function() {
  var currentPos = $(window).scrollTop();

  if ($(window).scrollTop() + $(window).height() + $("#nav-bar").outerHeight() >= $(document).height()) {
    $(".nav-link.active").removeClass("active");
    $("#connect-link").addClass("active");
  } else {

    $(".nav-link").each(function() {
      var sectionLink = $(this);
      var navHeight = $("#nav-bar").outerHeight() + 12;
      var section = $(sectionLink.attr("href"));

      if (section.length && section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
        $(".nav-link.active").removeClass("active");
        sectionLink.addClass("active");
      } else {
        sectionLink.removeClass("active");
      }
    });
  }
});

$(window).scroll(function () {
    handleTopNavAnimation();
  });
$(window).load(function () {
    handleTopNavAnimation();
});

function handleTopNavAnimation () {
    $(window).scroll(function () {
        var $nav = $("#nav-custom");
            $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
      });
  };
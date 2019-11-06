$(window).on('scroll', function () {
    handleTopNavAnimation();
  });

$(window).on('load', function () {
    handleTopNavAnimation();
});


function handleTopNavAnimation () {
    let $nav = $('#nav-custom');
    $nav.toggleClass('scrolled', $(this).scrollTop() > 50);
};

$(function(){
    $('.nav-item').on('click', function(){
        $(this).find('.rotated-angle').toggleClass('rotate');
    });
});


$(window).on('scroll', function () {
    handleTopNavAnimation();
  });

$(window).on('load', function () {
    handleTopNavAnimation();
});


function handleTopNavAnimation () {
    let $nav = $('#nav-custom');
    $nav.toggleClass('scrolled', $(this).scrollTop() > 10);
};

// $(function(){
//     $('.nav-item').on('click', function(){
//         $(this).find('.rotated-angle').toggleClass('rotate');
//     });
// });


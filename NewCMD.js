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

document.getElementsByClassName(".about").onclick = function()
{
  document.location.href = "https://juliur.github.io/NewCMDSite/About.html";
}
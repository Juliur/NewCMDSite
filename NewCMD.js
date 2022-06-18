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

$(function($) {
    $('.dropdown > a').click(function(){
        location.href = this.href;
    });
});

//audio player
jQuery(document).ready(function ($) {
if($.fn.mediaelementplayer) {
    
    let player = $("#podcast").mediaelementplayer({
        defaultAudioWidth: '100%',
        defaultAudioHeight: 100,
        skipBackInterval: 15,
        jumpForwardInterval: 15,
        features: [
            'playpause', 
            'current', 
            'progress', 
            'duration', 
            'volume',
            'skipback', 
            'jumpforward', 
            'speed'
        ]
    });

    player[0].player.container.classList.add('podcast-player-skin');

    const mobileMediaQuery = window.matchMedia('(max-width: 767px)').matches;
    if(mobileMediaQuery){
        groupPlayerControls();
    }

    function groupPlayerControls () {
        const elementTop = document.createElement('div');
        const elementBottom = document.createElement('div');
        elementTop.classList.add("buttons-wrap", "prepended-buttons");
        elementBottom.classList.add("buttons-wrap", "appended-buttons");
    
        const controls = document.querySelector('.mejs__controls');
        controls.prepend(elementTop);
        controls.append(elementBottom);
    
        const controlsChildren = Array.from(controls.childNodes).filter(v => v.className.startsWith("mejs_"));
    
        controlsChildren.slice(0, 4).forEach(elem => {
            elementTop.append(elem)
        });
    
        controlsChildren.slice(4, controlsChildren.length).forEach(elem => {
            elementBottom.append(elem)
        });
    }
}
})

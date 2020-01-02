$(document).ready(function() {
    $('.scrollbar').slimScroll({
        opacity: 0,
        height: '400px',
        allowPageScroll: true,
        disableFadeOut: true,
    })
    .mouseover(function() {
    $(this).next('.slimScrollBar').css('opacity', 0.2);
    });
});
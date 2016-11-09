$(document).ready(function () {
    $objWindow = $(window);
    $('.bg_parralax').each(function () {
        var $bgObj = $(this);
        $(window).scroll(function () {
            var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
            var coords = '100% ' + yPos + 'px';
            $bgObj.css({ backgroundPosition: coords });
        });
    });
});

/*window.onload = function () {
    var objWindow = window;
    var arr = document.getElementsByClassName('bg_parralax');
    for (var i = 0; i < arr.length; i++) {
        window.onscroll = function() {
            var yPos = -(window.pageYOffset / arr[i].dataset.speed);
            var coords = '100% ' + yPos + 'px';
            $bgObj.css({ backgroundPosition: coords });
        console.log(coords);
        }
    }
};*/
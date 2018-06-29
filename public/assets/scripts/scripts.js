$(document).ready(function () {

    /* Home page mouse position parallax code*/
    $('html').mousemove(function (e) {

        var wx = $(window).width();
        var wy = $(window).height();

        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        var newx = x - wx / 2;
        var newy = y - wy / 2;

        $('body div').each(function () {
            var speed = $(this).attr('parallax-speed');
            if ($(this).attr('data-revert')) speed *= -1;
            TweenMax.to($(this), 1, {
                x: (1 - newx * speed),
                y: (1 - newy * speed)
            });
        });
    });
});

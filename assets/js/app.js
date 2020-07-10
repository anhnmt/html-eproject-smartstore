$(function () {
    "use strict";

    /*---Slick-slider JS---*/
    $(".hero-slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 9000,
        fade: true,
    });

    /*---ScrollUp JS---*/
    $.scrollUp({
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade",
        scrollText: '<i class="fas fa-arrow-up"></i>',
    });

    /*---Tooltip---*/
    $('[data-toggle="tooltip"]').tooltip();

    /*---Stickey Menu---*/
    var navbarSticky = $(".header-bottom");
    var stickyTop = navbarSticky.offset().top;

    /*---Scroll JS---*/
    $(window).on("scroll", function () {
        var windowTop = $(window).scrollTop();

        if (stickyTop < windowTop) {
            navbarSticky.addClass("fixed-top");
        } else {
            navbarSticky.removeClass("fixed-top");
        }
    });

    /*---Offcanvas Menu---*/
    $(".navbar-toggler").on("click", function () {
        $("body").addClass("block");
        $("#header-navbar").addClass("show");
        $(".overlay").show();
    });

    $(".overlay").on("click", function () {
        $("body").removeClass("block");
        $("#header-navbar").removeClass("show");
        $(".overlay").hide();
    });

    /*---Check login---*/
    $(function() {
        if (typeof(Storage) !== 'undefined') {
            if (UserManager.checkLogin()) {
                $('.header-account').html('<i class="fas fa-user"></i> <span>Hello: ' + UserManager.checkLogin() + '</span> | <a id="btn_logout" data-toggle="tooltip" title="Log out"><span>Log out</span></a>');
                $('[data-toggle="tooltip"]').tooltip();
                $('#header-account1').html('<a id="btn_logout">Log out</a>');
                $('[data-toggle="tooltip"]').tooltip(); 
            }
        }
    });

    /*---Click logout---*/
    $(document).on('click', '#btn_logout', function() {
        alert('Logged out successfully!');
        UserManager.logoutUser();
        location.replace('index.html');
    });
});

require.config({
    deps: ['app'],
    paths: {
        jquery: 'jquery.min',
        slick: 'slick/slick.min',
        lazyload: 'lazyload/lazyload.min',
        bootstrap: 'bootstrap/bootstrap.bundle.min',
        scrollUp: 'scrollUp/jquery.scrollUp.min',
        jqueryValidate: 'jqueryValidate/jquery.validate.min',
        customJS: 'custom',
    },
    shim: {
        slick: {
            deps: ["jquery"]
        },
        bootstrap: {
            deps: ["jquery"]
        },
        scrollUp: {
            deps: ["jquery"]
        },
        jqueryValidate: {
            deps: ["jquery"]
        },
        customJS: {
            deps: ["jquery"]
        },
    },
});

define(['jquery', 'bootstrap', 'customJS'], function($) {
    'use strict'

    /*---Lazyload---*/
    require(['lazyload'], function(LazyLoad) {
        window.ll = new LazyLoad({
            elements_selector: ".lazy",
        });
    });

    /*---Slick-slider JS---*/
    require(['slick'], function(slick) {
        $('.hero-slider').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 9000,
            fade: true,
        });
    });

    /*---ScrollUp JS---*/
    require(['scrollUp'], function(scrollUp) {
        $.scrollUp({
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade',
            scrollText: '<i class="fas fa-arrow-up"></i>',
        });
    });

    /*---Tooltip---*/
    $('[data-toggle="tooltip"]').tooltip();

    /*---Stickey Menu---*/
    var navbarSticky = $(".header-bottom");
    var stickyTop = navbarSticky.offset().top;

    /*---Scroll JS---*/
    $(window).on('scroll', function() {
        var windowTop = $(window).scrollTop();

        if (stickyTop < windowTop) {
            navbarSticky.addClass("fixed-top");
        } else {
            navbarSticky.removeClass("fixed-top");
        }
    });

    /*---Offcanvas Menu---*/
    $('.navbar-toggler').on('click', function() {
        $('body').addClass('block');
        $('#header-navbar').addClass('show');
        $('.overlay').show();
    });

    $('.overlay').on('click', function() {
        $('body').removeClass('block');
        $('#header-navbar').removeClass('show');
        $('.overlay').hide();
    });

    /*---Check login---*/
    $(function() {
        if (typeof(Storage) !== 'undefined') {
            if (UserManager.checkLogin()) {
                $('.header-account').html('<i class="fas fa-user"></i> <span>Hello: ' + UserManager.checkLogin() + '</span> | <a id="btn_logout" data-toggle="tooltip" title="Log out"><span>Log out</span></a>');
                $('[data-toggle="tooltip"]').tooltip();
                $('#header-account1').html('<i class="fas fa-user" style="float:left; margin-top:5px; margin-right:5px;"></i> <a id="btn_logout" data-toggle="tooltip" title="Log out"><span> Log out</span></a>');
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

    /*---jQuery Validate---*/
    require(['jqueryValidate'], function(validate) {
        /*---Validate login---*/
        $("#form_Login").validate({
            rules: {
                login_Email: {
                    required: true,
                    email: true,
                    normalizer: function(value) {
                        return $.trim(value);
                    }
                },
                login_Password: {
                    required: true,
                    minlength: 6,
                    normalizer: function(value) {
                        return $.trim(value);
                    }
                },
            },
            messages: {
                login_Email: {
                    required: "Enter your email",
                    email: "Please enter a valid email address.",
                },
                login_Password: {
                    required: "Enter your password",
                    minlength: "Please enter at least 6 characters.",
                },
            },
            highlight: function(input) {
                $(input).addClass('is-invalid');
            },
            unhighlight: function(input) {
                $(input).removeClass('is-invalid');
            },
            errorPlacement: function(error, element) {
                $(element).next().append(error);
            },
            submitHandler: function() {
                if (typeof(Storage) !== 'undefined') {
                    var username = $('.txt_login[type="email"]').val();
                    var password = $('.txt_login[type="password"]').val();
                    if (UserManager.loginUser(username, password)) {
                        alert('Logged in successfully!');
                        location.replace('index.html');
                    } else {
                        alert('Login failed, please try again!');
                    }
                }
            }
        });

        /*---Validate register---*/
        $("#form_Register").validate({
            rules: {
                register_Email: {
                    required: true,
                    email: true,
                    normalizer: function(value) {
                        return $.trim(value);
                    }
                },
                register_Password: {
                    required: true,
                    minlength: 6,
                    normalizer: function(value) {
                        return $.trim(value);
                    }
                },
                Password_2: {
                    required: true,
                    minlength: 6,
                    normalizer: function(value) {
                        return $.trim(value);
                    },
                    equalTo:"#register_Password"
                },
            },
            messages: {
                register_Email: {
                    required: "Enter your email",
                    email: "Please enter a valid email address.",
                },
                register_Password: {
                    required: "Enter your password",
                    minlength: "Please enter at least 6 characters.",
                },
                Password_2: {
                    required: "Enter your password",
                    minlength: "Please enter at least 6 characters.",
                },
            },
            highlight: function(input) {
                $(input).addClass('is-invalid');
            },
            unhighlight: function(input) {
                $(input).removeClass('is-invalid');
            },
            errorPlacement: function(error, element) {
                $(element).next().append(error);
            },
            submitHandler: function() {
                if (typeof(Storage) !== 'undefined') {
                    var username = $('.txt_register[type="email"]').val();
                    var password = $('.txt_register[type="password"]').val();
                    UserManager.setUser(username, password);
                    alert('Registration successful, login now!');
                    location.reload();
                }
            }
        });
    });
});
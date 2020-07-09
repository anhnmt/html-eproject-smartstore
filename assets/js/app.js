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

    // Shop JS
    $(".view-grip").click(function (event) {
        $(".shop-item").show(600);
        $(".shop-item-list").hide();
        $(".view-grip").css("color", "yellowgreen");
        $(".view-list").css("color", "black");
    });
    $(".view-list").click(function (event) {
        $(".shop-item-list").show(600);
        $(".shop-item").hide();
        $(".view-grip").css("color", "black");
        $(".view-list").css("color", "yellowgreen");
    });

    // Product JS
    $(".btn-wishlist").click(function (event) {
        event.preventDefault();
        var id = 1;
        var name = "Circulus Cabinet";
        var cat = "wardrobe";
        var price = "1125.00";
        var image = "assets/images/products/wardrobe/pro-01.jpg";

        WishlistManager.setWishlist(id, name, cat, price, image);
        $(".wishlist-quantity").text(
            WishlistManager.getTotalQuantityOfWishlist()
        );
    });

    $(".btn-cart").click(function (event) {
        event.preventDefault();
        var id = 1;
        var name = "Circulus Cabinet";
        var cat = "wardrobe";
        var price = "1125.00";
        var quantity = $("#product-quantity").val();
        var image = "assets/images/products/wardrobe/pro-01.jpg";
    
        ProductManager.setProduct(id, name, cat, price, quantity, image);
        $(".cart-quantity").text(ProductManager.getTotalQuantityOfProduct());
    });

    /*---Validate login---*/
    $("#form_Login").validate({
        rules: {
            login_Email: {
                required: true,
                email: true,
                normalizer: function (value) {
                    return $.trim(value);
                },
            },
            login_Password: {
                required: true,
                minlength: 6,
                normalizer: function (value) {
                    return $.trim(value);
                },
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
        highlight: function (input) {
            $(input).addClass("is-invalid");
        },
        unhighlight: function (input) {
            $(input).removeClass("is-invalid");
        },
        errorPlacement: function (error, element) {
            $(element).next().append(error);
        },
        submitHandler: function () {
            alert("Success");
        },
    });

    /*---Validate register---*/
    $("#form_Register").validate({
        rules: {
            register_Email: {
                required: true,
                email: true,
                normalizer: function (value) {
                    return $.trim(value);
                },
            },
            register_Password: {
                required: true,
                minlength: 6,
                normalizer: function (value) {
                    return $.trim(value);
                },
            },
            Password_2: {
                required: true,
                minlength: 6,
                normalizer: function (value) {
                    return $.trim(value);
                },
                equalTo: "#register_Password",
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
        highlight: function (input) {
            $(input).addClass("is-invalid");
        },
        unhighlight: function (input) {
            $(input).removeClass("is-invalid");
        },
        errorPlacement: function (error, element) {
            $(element).next().append(error);
        },
        submitHandler: function () {
            alert("Success");
        },
    });
});

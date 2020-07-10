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
        if (typeof Storage !== "undefined") {
            var username = $('.txt_login[type="email"]').val();
            var password = $('.txt_login[type="password"]').val();
            if (UserManager.loginUser(username, password)) {
                alert("Logged in successfully!");
                location.replace("index.html");
            } else {
                alert("Login failed, please try again!");
            }
        }
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
        if (typeof Storage !== "undefined") {
            var username = $('.txt_register[type="email"]').val();
            var password = $('.txt_register[type="password"]').val();
            UserManager.setUser(username, password);
            alert("Registration successful, login now!");
            location.reload();
        }
    },
});

// Check login
$(function () {
    if (typeof Storage !== "undefined") {
        localStorage.users = localStorage.users ? localStorage.users : "";

        var user = localStorage.isLogin;
        if (user !== null && user !== "") {
            location.replace("index.html");
        }
    }
});

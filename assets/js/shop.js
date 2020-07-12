// Shop JS
$(".view-grip").click(function (event) {
    $(".shop-item").show(600);
    $(".shop-item-list").hide();
    $(".view-grip").css("color", "#ffd54c");
    $(".view-list").css("color", "black");
});
$(".view-list").click(function (event) {
    $(".shop-item-list").show(600);
    $(".shop-item").hide();
    $(".view-grip").css("color", "black");
    $(".view-list").css("color", "#ffd54c");
});

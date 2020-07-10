// Product JS
$(".btn-wishlist").click(function (event) {
    event.preventDefault();
    var id = 1;
    var name = "Circulus Cabinet";
    var cat = "wardrobe";
    var price = "1125.00";
    var image = "assets/images/products/wardrobe/pro-01.jpg";

    WishlistManager.setWishlist(id, name, cat, price, image);
    $(".wishlist-quantity").text(WishlistManager.getTotalQuantityOfWishlist());
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

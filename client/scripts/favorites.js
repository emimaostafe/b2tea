document.addEventListener("DOMContentLoaded", function() {
    var favoritesPlaceholder = document.getElementById("favorites-placeholder");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var products = JSON.parse(xhr.responseText);
            renderFavoriteProducts(products);
        }
    };

    xhr.open("GET", "get_favorite_products.php", true);
    xhr.send();

    function renderFavoriteProducts(products) {
        var favoritesHtml = "";

        if (products.length > 0) {
            products.forEach(function(product) {
                var stars = "";
                for (var i = 0; i < parseInt(product.rating); i++) {
                    stars += "★";
                }
                for (var i = parseInt(product.rating); i < 5; i++) {
                    stars += "☆";
                }

                var cardHtml = `
                    <div class="favorite-card" style="background-image: url(${product.imageUrl})">
                        <div class="fav-top"></div>
                        <div class="favorite-bottom">
                            <div class="fav-info">
                                <div class="fav-title">${product.name}</div>
                                <div class="fav-description">${product.description}</div>
                                <div class="fav-details">
                                    <div class="fav-rating">
                                        <div class="fav-stars">${stars}</div>
                                        <div class="fav-score">${product.rating}</div>
                                    </div>
                                    <div class="fav-price"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                favoritesHtml += cardHtml;
            });
        } else {
            favoritesHtml = "No favorite products found.";
        }

        favoritesPlaceholder.innerHTML = favoritesHtml;
    }
});

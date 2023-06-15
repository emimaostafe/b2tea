<?php
    require_once("services/products.php");

    $productService = new ProductsService();
    $products = $productService->getFavoriteProducts();
?>

<section>
    <div class="container">
        <div class="page-title subtitle">in the mood for... tea? <br /> check our favorites</div>
        <div class="favorites">
<?php
    if (!empty($products)) {
        foreach ($products as $product) {

            $stars = '';
            for ($i = 0; $i < intval($product["rating"]); $i++) {
                $stars .= '★';
            }
            for ($i = intval($product["rating"]); $i < 5; $i++) {
                $stars .= '☆';
            }
?>
            <div class="favorite-card" style="background-image: url(<?php echo $product['imageUrl']; ?>)">
                <div class="fav-top"></div>
                <div class="favorite-bottom">
                    <div class="fav-info">
                        <div class="fav-title"><?php echo $product["name"] ?></div>
                        <div class="fav-description"><?php echo $product["description"] ?></div>
                        <div class="fav-details">
                            <div class="fav-rating">
                                <div class="fav-stars"><?php echo $stars ?></div>
                                <div class="fav-score"><?php echo $product["rating"] ?></div>
                            </div>
                            <div class="fav-price"></div>
                        </div>
                    </div>
                </div>
            </div>
<?php
        }
    }
?>
        </div>
    </div>
</section>

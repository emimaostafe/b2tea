<?php
    require_once("services/products.php");

    $productService = new ProductsService();
    $products = $productService->getProducts();
?>
<section class="tea-menu container">
    <div class="cards">
    <?php
        if (!empty($products)) {
            foreach ($products as $product) {
?>
        <div class="card" style="background-image: url(<?php echo $product['imageUrl']; ?>)">
            <div class="top top top_1">
                <div class="actions">
                    <div class="btn btn__icon" >
                        <i class="ri-shopping-cart-line"></i>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="info">
                    <div class="title">
                        <div class="text"><?php echo $product["name"] ?></div>

                        <div class="price"><?php echo $product["price"] ?></div>
                    </div>
                      <div class="description"><?php echo $product["description"] ?></div>

                </div>
            </div>
        </div>
        <?php
                }
            }
        ?>
         </div>
        </section>
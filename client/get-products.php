<?php
    require_once("services/products.php");

    $productService = new ProductsService();
    $products = $productService->getProducts();

    // Return the products as JSON response
    header('Content-Type: application/json');
    echo json_encode($products);
?>

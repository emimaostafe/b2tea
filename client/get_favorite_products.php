<?php
require_once("services/products.php");

$productService = new ProductsService();
$products = $productService->getFavoriteProducts();

header('Content-Type: application/json');
echo json_encode($products);
?>

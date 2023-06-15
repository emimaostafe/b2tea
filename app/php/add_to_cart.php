<?php
// Start the session if not already started
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}

// Check if the cart array exists in the session, if not, create it
if (!isset($_SESSION['cart'])) {
  $_SESSION['cart'] = array();
}

// Get the product and price from the POST request
$product = $_POST['product'];
$price = $_POST['price'];

// Add the item to the cart array in the session
$_SESSION['cart'][] = array(
  'product' => $product,
  'price' => $price
);
?>

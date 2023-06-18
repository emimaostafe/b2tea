<?php
// Start the session if not already started
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}

// Check if the cart array exists in the session, if not, create it
if (!isset($_SESSION['cart'])) {
  $_SESSION['cart'] = array();
}

// Function to calculate the total price
function calculateTotalPrice($cartItems) {
  $totalPrice = 0;
  foreach ($cartItems as $item) {
    $totalPrice += $item['price'];
  }
  return $totalPrice;
}

// Get the cart items from the session
$cartItems = $_SESSION['cart'];

// Generate the updated receipt HTML
$receiptHTML = '<div class="subtitle">Cart</div>';
foreach ($cartItems as $item) {
  $receiptHTML .= '<div>' . $item['product'] . ' - ' . $item['price'] . '</div>';
}
$totalPrice = calculateTotalPrice($cartItems);
$receiptHTML .= '<div class="end-section">
                  <div class="total">
                    <div class="name">Total:</div>
                  </div>
                  <div class="total-price">' . $totalPrice . ' lei</div>
                </div>';

// Return the receipt HTML as the response
echo $receiptHTML;
?>

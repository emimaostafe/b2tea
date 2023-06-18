<?php
// Start the session if not already started
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}

// Check if the cart array exists in the session
if (isset($_SESSION['cart'])) {
  // Get the index of the item to remove from the query string or POST data
  $index = $_REQUEST['index'];

  // Check if the index is valid
  if (isset($_SESSION['cart'][$index])) {
    // Remove the item from the cart array based on the index
    unset($_SESSION['cart'][$index]);
  }

  // Reindex the cart array to remove any gaps
  $_SESSION['cart'] = array_values($_SESSION['cart']);
}
?>

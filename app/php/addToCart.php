<?php
// Include the connection.php file
require_once '..database/connection.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the item ID from the form
    $itemId = $_POST['item_id'];

    // Insert the item into the comenzi table
    try {
        // Prepare the SQL statement
        $stmt = $pdo->prepare("INSERT INTO comenzi (produs_id) VALUES (?)");

        // Bind the parameters
        $stmt->bindParam(1, $itemId);

        // Execute the statement
        $stmt->execute();
    } catch (PDOException $e) {
        // Handle the exception here, e.g., display an error message
        echo "Error: " . $e->getMessage();
    }
}
?>

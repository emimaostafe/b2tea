<?php
require_once 'connection.php';
header('Access-Control-Allow-Origin: http://localhost:8000');

// Handle API requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the order data from the request body
    $requestData = json_decode(file_get_contents('php://input'), true);

    // Retrieve the cart items from local storage
    $cartItems = json_decode($requestData['cartItems'], true);

    // Display the cart items for debugging
    var_dump($cartItems);

    // Check if cart items exist
    if (!empty($cartItems)) {
        try {
            // Create a new database connection
            $db = new PDO($dsn, $dbUser, $dbPass);

            // Prepare and execute the SQL query to insert each cart item into the cos table
            $query = "INSERT INTO cos (title, price) VALUES (?, ?)";
            $stmt = $db->prepare($query);

            // Iterate through the cart items and insert them into the table
            foreach ($cartItems as $item) {
                $title = $item['title'];
                $price = $item['price'];

                // Display the values being inserted for debugging
                echo "Inserting item: title = $title, price = $price<br>";

                $stmt->execute([$title, $price]);

                // Check for errors during the execution of the statement
                $errorInfo = $stmt->errorInfo();
                if ($errorInfo[0] !== '00000') {
                    throw new Exception('Error inserting item: ' . $errorInfo[2]);
                }
            }

            // Check if any rows were inserted
            if ($stmt->rowCount() > 0) {
                // Order data inserted successfully
                $responseData = [
                    'message' => 'Order saved successfully'
                ];
                http_response_code(200); // Set the response status code to 200 (OK)
            } else {
                // Failed to insert order data
                $responseData = [
                    'message' => 'Failed to save the order'
                ];
                http_response_code(500); // Set the response status code to 500 (Internal Server Error)
            }
        } catch (PDOException $e) {
            // Database connection or query error
            $responseData = [
                'message' => 'Database error: ' . $e->getMessage()
            ];
            http_response_code(500); // Set the response status code to 500 (Internal Server Error)
        } catch (Exception $e) {
            // Other errors
            $responseData = [
                'message' => 'Error: ' . $e->getMessage()
            ];
            http_response_code(500); // Set the response status code to 500 (Internal Server Error)
        }
    } else {
        // No cart items found
        $responseData = [
            'message' => 'No items found in the cart'
        ];
        http_response_code(400); // Set the response status code to 400 (Bad Request)
    }

    // Send the JSON response
    header('Content-Type: application/json');
    echo json_encode($responseData);
}


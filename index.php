<?php

require_once 'connection.php';
header('Access-Control-Allow-Origin: http://localhost:8000');

// Serve static files
if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js)$/', $_SERVER["REQUEST_URI"])) {
    return false; // Serve the requested file as-is
} else {
    // Handle API requests
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Handle POST requests

        // Retrieve the order data from the request body
        $requestData = json_decode(file_get_contents('php://input'), true);

        // Extract the necessary fields from the request data
        $clientId = $requestData['clientId'];
        $tableId = $requestData['tableId'];
        $isTakeaway = true; // Set the istakeaway field to true
        $dateTime = date('Y-m-d H:i:s'); // Get the current date and time

        try {
            // Create a new database connection
            $db = new PDO($dsn, $dbUser, $dbPass);

            // Prepare and execute the SQL query to insert the order data into the comenzi table
            $query = "INSERT INTO comenzi (clientid, tableid, istakeaway, datacomanda) VALUES (?, ?, ?, ?)";
            $stmt = $db->prepare($query);
            $stmt->execute([$clientId, $tableId, $isTakeaway, $dateTime]);

            // Check if the query executed successfully
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
        }

        // Send the JSON response
        header('Content-Type: application/json');
        echo json_encode($responseData);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Handle GET requests
        $responseData = [
            'message' => 'API GET request successful'
        ];
        // Send the JSON response
        header('Content-Type: application/json');
        echo json_encode($responseData);
    } else {
        // Handle other HTTP methods
        header('HTTP/1.1 405 Method Not Allowed');
        header('Allow: POST, GET');
        echo '405 Method Not Allowed';
    }
}

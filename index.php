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

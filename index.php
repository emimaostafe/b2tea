<?php

// Serve static files
if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js)$/', $_SERVER["REQUEST_URI"])) {
    return false; // Serve the requested file as-is
} else {
    // Handle API requests
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Handle POST requests
        $requestData = json_decode(file_get_contents('php://input'), true);
        // Process the request data and perform necessary actions
        // ...
        // Prepare the response data
        $responseData = [
            'message' => 'API request successful',
            'data' => $requestData
        ];
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

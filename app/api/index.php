<?php

// Your API endpoint


$method=$_SERVER['REQUEST_METHOD'];
$url=$_SERVER['REQUEST_URI'];
echo $method . " " . $url;
echo $url.split("/")[];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the request data
    $requestData = json_decode(file_get_contents('php://input'), true);

    // Validate and process the request data
    // ...

    // Prepare the response data
    $responseData = [
        'message' => 'API request successful',
        //'data' => $requestData
    ];

    // Send the JSON response
    header('Content-Type: application/json');
    echo json_encode($responseData);
} else {
    // Handle unsupported HTTP methods
    header('HTTP/1.1 405 Method Not Allowed');
    header('Allow: POST');
    echo '405 Method Not Allowed';
}

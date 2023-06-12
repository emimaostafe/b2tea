<?php

header('Content-Type: application/json');

//API endpoints
$endpoints = array(
    'home' => array(
        'url' => '/home',
        'method' => 'GET',
        'handler' => 'getHomePage'
    )
);

// Handle the API request
$requestUrl = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

foreach ($endpoints as $endpoint) {
    if ($requestUrl === $endpoint['url'] && $requestMethod === $endpoint['method']) {
        $handler = $endpoint['handler'];
        $response = $handler();
        echo json_encode($response);
        exit();
    }
}

//Handle home endpoint
function getHomePage() {

    $fileContents = file_get_contents('pages/home.html');


    return array(
        'status' => 'success',
        'data' => $fileContents
    );
}
?>

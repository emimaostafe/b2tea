<?php

require_once "config/route-handler.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$method = $_SERVER['REQUEST_METHOD'];
$url = $_SERVER['REQUEST_URI'];

$requestBody = file_get_contents('php://input');
$payload = json_decode($requestBody, true);


$db = new Database();

$insertQuery = "INSERT INTO Orders(table_id, user, products, total_price, date, time) VALUES 
                (3, 'fdsafds', '3,4,5,2', 90, '2023-08-12', '10:30:00')";

$db->query($insertQuery);


$routeHandler = new RouteHandler();
$routeHandler->handle($url);


if ($routeHandler->isValidController == 1) {
    $controller = new $routeHandler->controllerClass($url, $method, $payload);
    $result = $controller->handle();

    echo $result;
} else {
    echo "Invalid route";
}

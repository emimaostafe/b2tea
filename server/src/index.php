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

$cartitems = json_decode($requestBody);
echo json_encode($cartitems);
$cartItems = json_decode($requestBody, true);
echo json_encode($cartItems);

$routeHandler = new RouteHandler();
$routeHandler->handle($url);

if ($routeHandler->isValidController == 1) {
    $controller = new $routeHandler->controllerClass($url, $method, $payload);
    $result = $controller->handle();

    echo $result;
} else {
    echo "Invalid route";
}

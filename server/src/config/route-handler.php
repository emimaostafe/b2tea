<?php

require_once 'controllers/controller.php';
require_once 'controllers/products-controller.php';
require_once 'controllers/orders-controller.php';

class AvailableRoutes
{
    public static $all = [
        'products' => 'ProductsController',
        'orders' => 'OrdersController',
    ];

    public static function exists($route)
    {
        return array_key_exists($route, self::$all);
    }

    public static function controller($key)
    {
        return self::$all[$key];
    }
}

class RouteHandler
{
    public string $controllerClass;
    public bool $isValidController;

    public function __construct()
    {
        $this->isValidController = false;
    }

    public function handle($url)
    {
        if ($this->isValid($url)) {
            $this->controllerClass = $this->getController($url);
            $this->isValidController = true;
        }
    }

    private function isValid($url)
    {
        $parts = explode("/", $url);
        
        $isEmptyPart = $parts[0] == "";
        $isApiPart = $parts[1] == "api";
        $isController = AvailableRoutes::exists($parts[2]);

        return $isEmptyPart && $isApiPart && $isController;
    }

    private function getController($url)
    {
        $route = explode("/", $url)[2];

        return AvailableRoutes::controller($route);
    }
}
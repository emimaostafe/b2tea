<?php

function splitURL($url) {
    return explode('/', $url);
}

function handleRequest($urlParts) {

    if (isset($urlParts[1]) && $urlParts[1] === 'api') {

        if (isset($urlParts[2])) {

            $controllerName = '';

            switch ($urlParts[2]) {
                case 'products':
                    $controllerName = 'ProductsController';
                    break;
                case 'orders':
                    $controllerName = 'OrdersController';
                    break;
                case 'tables':
                    $controllerName = 'TablesController';
                    break;

                default:
                    return null;
            }

            if (!empty($controllerName)) {
                $controller = new $controllerName();
                return $controller;
            }
        }
    }

    // Invalid URL or incomplete path
    return null;
}

?>


<?php

require_once 'controllers/controller.php';
require_once 'services/products-service.php';

class ProductsController implements ControllerInterface
{
    private $ordersService;
    private $uri;
    private $method;
    private $payload;
    
    public function __construct($uri, $method, $payload = null)
    {
        $this->ordersService = new OrdersService();
        $this->uri = $uri;
        $this->method = $method;
        $this->payload = $payload;
    }

    function handle($uri, $method, $payload = null) {
        switch($this->method) {
            case "GET":
                //return $this->handleGet();
            //case "POST": return post(payload);
            //case "PUT": return put(id, payload);
            default: break;
        }
    }

    private function handleGet(): string
    {
        if ($this->isGetById()) {
            $id = $this->parts()[3];

            return $this->productsService->getById($id);
        }

        if ($this->isGetFavorites()) {
            return $this->productsService->getFavorites();
        }

        return $this->productsService->getAll();
    }

    private function parts()
    {
        return explode("/", $this->uri);
    }

    private function isGetById()
    {
        return count($this->parts()) === 4 && ($this->parts()[3]) > 0;
    }

    private function isGetFavorites()
    {
        return count($this->parts()) === 4 && end($this->parts()) === 'favorites';
    }


}
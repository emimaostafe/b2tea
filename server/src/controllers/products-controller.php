<?php

require_once 'controllers/controller.php';
require_once 'services/products-service.php';

class ProductsController implements ControllerInterface
{
    private $productsService;
    private $uri;
    private $method;
    private $payload;

    public function __construct($uri, $method, $payload = null)
    {
        $this->productsService = new ProductsService();
        $this->uri = $uri;
        $this->method = $method;
        $this->payload = $payload;
    }

    public function handle(): string
    {
        switch ($this->method) {
            case "GET":
                return $this->handleGet();
            default:
                return "Unresolved endpoint";
        }
    }

    private function handleGet(): string
    {
        if ($this->isGetById()) {
            $id = intval($this->parts()[3]);
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
        return count($this->parts()) === 4 && is_int($this->parts()[3]) && ($this->parts()[3] > 0);
    }

    private function isGetFavorites()
    {
        return count($this->parts()) === 4 && $this->parts()[3] === 'favorites';
    }
}
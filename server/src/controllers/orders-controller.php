<?php 

require_once "services/orders-service.php";

class OrdersController 
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

    function handle() {
        switch($this->method) {
            case "GET":
                return $this->handleGet();
            case "POST":
                return $this->handlePost();
            default:
                return "Unresolved method";
        }
    }

    private function handleGet(): string
    {
        if ($this->isGetById()) {
            $id = $this->parts()[3];
            return $this->ordersService->getById($id);
        } else if ($this->isGetAll()) {
            return $this->ordersService->getAll();
        } else {
            return "Unresolved endpoint";
        }
    }

    function handlePost() {
        if ($this->isPostOrder()) {
            $id = $this->parts()[3];
            return $this->ordersService->insertOrder();
        }
    }

    function put() {

    }

    function delete() {

    }

    private function parts()
    {
        return explode("/", $this->uri);
    }

    private function isGetById()
    {
        return count($this->parts()) === 4 && ($this->parts()[3] > 0);
    }

    private function isPostOrder()
    {
        return count($this->parts()) === 4 && ($this->parts()[3] > 0);
    }

    private function isGetAll()
    {
        return count($this->parts()) === 3;
    }
}
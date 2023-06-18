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

    function handle($uri, $method, $payload = null) {
        switch($this->method) {
            case "GET":
                //return $this->handleGet();
            //case "POST": return post(payload);
            //case "PUT": return put(id, payload);
            default: break;
        }
    }

    function get() {
        return $service->getAll();
    }

    function post() {

    }

    function put() {

    }

    function delete() {

    }
}
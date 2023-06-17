<?php 

require_once "services/orders-service.php";

class OrdersController 
{
    private $service;
    
    public function __construct()
    {
        $this->service = new OrdersService();
    }

    function handle($uri, $method, $payload = null) {
        switch(method) {
            case "GET": return get();
            case "POST": return post(payload);
            case "PUT": return put(id, payload);
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
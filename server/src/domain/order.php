<?php

require_once 'repository/database.php';

class Order
{
    public $id;
    public $tableId;
    public $user;
    public $products;
    public $totalPrice;
    public $date;
    public $time;

    public function __construct($id, $tableId, $user, $products, $totalPrice, $date, $time)
    {
        $this->id = $id;
        $this->tableId = $tableId;
        $this->user = $user;
        $this->products = $products;
        $this->totalPrice = $totalPrice;
        $this->date = $date;
        $this->time = $time;
    }
    
    public function __toString()
    {
        return json_encode($this);
    }
}
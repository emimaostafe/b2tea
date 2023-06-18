<?php

require_once 'repository/database.php';

class ProductMenu
{
    public $id;
    public $name;
    public $imageUrl;
    public $price;

    public function __construct($id, $name, $imageUrl, $price)
    {
        $this->id = $id;
        $this->name = $name;
        $this->imageUrl = $imageUrl;
        $this->price = $price;
    }

    public function __toString()
    {
        return json_encode($this);
    }
}
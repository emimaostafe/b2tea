<?php

require_once 'repository/database.php';

class OrderedProduct
{
    public $id;
    public $name;
    public $description;
    public $imageUrl;
    public $rating;

    public function __construct($id, $name, $description, $imageUrl, $rating)
    {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->imageUrl = $imageUrl;
        $this->rating = $rating;
    }

    public function __toString()
    {
        return json_encode($this);
    }
}
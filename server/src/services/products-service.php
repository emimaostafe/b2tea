<?php

require_once("domain/product.php");

class ProductQueries
{
    public static $getAll = "SELECT * FROM Products";
    
    public static $getById = "SELECT * FROM Products WHERE id = ?"; 

    public static $getFavorites = "SELECT * FROM Products ORDER BY rating DESC LIMIT 4";
}

class ProductsService
{
    private $database;

    public function __construct()
    {
        $this->database = new Database();
    }

    public function getAll(): string
    {
        $result = $this->database->query(ProductQueries::$getAll);
        return $this->mapToArray($result);
    }

    public function getFavorites(): string
    {
        $result = $this->database->query(ProductQueries::$getFavorites);
        return $this->mapToArray($result);
    }

    public function getById($id): string
    {
        $result = $this->database->getById(ProductQueries::$getById, $id);
        return $this->mapToArray($result);
    }

    private function mapToArray($result): string
    {
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = new Product($row['id'], $row['name'], $row['description'], $row['imageUrl'], $row['rating']);
        }

        return json_encode($products);
    }
}
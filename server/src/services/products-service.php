<?php

require_once("domain/product.php");
require_once("domain/productMenu.php");

class ProductQueries
{
    public static $getAll = "SELECT * FROM ProductsMenu";
    
    public static $getById = "SELECT * FROM ProductsMenu WHERE id = ?"; 

    public static $getFavorites = "SELECT * FROM Products";
    //ORDER BY rating DESC LIMIT 4"
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
        return $this->mapToArrayFavorites($result);
    }
    
    public function getById($id): string
    {
        $result = $this->database->getById(ProductQueries::$getById, $id);
        return $this->mapToArray($result);
    }

    private function mapToArrayFavorites($result): string
    {
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = new Product($row['id'], $row['name'], $row['description'], $row['imageUrl'], $row['rating']);
        }

        return json_encode($products);
    }

    private function mapToArray($result): string
    {
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = new ProductMenu($row['id'], $row['name'], $row['imageUrl'], $row['price']);
        }

        return json_encode($products);
    }
}
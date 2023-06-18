<?php

require_once("domain/product.php");

class ProductQueries
{
    public static $getAll = "SELECT * FROM Products";
    
    public static $getById = "SELECT * FROM Products WHERE id = ?";

    public static $getFavorites = "SELECT * FROM products ORDER BY rating DESC LIMIT 4";


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
        $products = $this->mapToArray($result);
        $jsonResponse = json_encode($products);
        return substr($jsonResponse, strpos($jsonResponse, "["));
    }

    public function getById($id): string
    {
        $result = $this->database->getById(ProductQueries::$getById, $id);
        return $this->mapToArray($result);
    }

  public function getFavorites(): string
  {
      $result = $this->database->query(ProductQueries::$getFavorites);
      $products = $this->mapToArray($result);
      $jsonResponse = json_encode($products);
      return substr($jsonResponse, strpos($jsonResponse, "["));
  }


  private function mapToArray($result): array
  {
      $products = array();
      while ($row = $result->fetch_assoc()) {
          $products[] = array(
              'id' => $row['id'],
              'name' => $row['name'],
              'description' => $row['description'],
              'imageUrl' => $row['imageUrl'],
              'rating' => $row['rating']
          );
      }

      return $products;
  }


}
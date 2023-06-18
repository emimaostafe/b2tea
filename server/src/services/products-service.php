<?php

require_once("domain/product.php");
require_once("domain/productMenu.php");

class ProductQueries
{
    public static $getAll = "SELECT * FROM ProductsMenu";
    
    public static $getById = "SELECT * FROM ProductsMenu WHERE id = ?"; 

<<<<<<< HEAD
    public static $getFavorites = "SELECT * FROM ProductsORDER BY rating DESC LIMIT 4";

=======
<<<<<<< HEAD
    public static $getFavorites = "SELECT * FROM products ORDER BY rating DESC LIMIT 4";


=======
    public static $getFavorites = "SELECT * FROM Products ORDER BY rating DESC LIMIT 4";
>>>>>>> 849dd0c61a7c4f68825afb83891f3d8b6659f5c8
>>>>>>> 539b298e44f71af4be10a1186eac50a2ab5af83e
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

<<<<<<< HEAD
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


=======
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
>>>>>>> 849dd0c61a7c4f68825afb83891f3d8b6659f5c8
}
<?php

require_once("domain/order.php");

class OrderQueries 
{

    public static $getAll = "SELECT * from Orders";

    public static $getById = "SELECT * from Orders WHERE id = ?";

    public static $insertOrder = "INSERT INTO Orders (table_id, user, products, total_price, date, time) VALUES (?, ?, ?, ?, ?, ?)";

}

class OrdersService
{
    private $database;

    public function __construct()
    {
        $this->database = new Database();
    }
    
    public function getAll(): string
    {
        $result = $this->database->query(OrderQueries::$getAll);
        return $this->mapToArray($result);
    }

    public function getById($id): string
    {
        $result = $this->database->getById(OrderQueries::$getById, $id);
        return $this->mapToArray($result);
    }

    public function insertOrder() {
        // i have to map an object then to insert it into the database
    }

    private function mapToArray($result): string
    {
        $orders = array();
        while ($row = $result->fetch_assoc()) {
            $orders[] = new Order($row['id'], $row['table_id'], $row['user'], $row['products'], $row['total_price'], $row['date'], $row['time']);
        }

        return json_encode($orders);
    }
}


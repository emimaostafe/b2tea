<?php

class OrdersService
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    
    public function getAll()
    {
        $sql = "SELECT * FROM orders";
        $result = $this->db->query($sql);
        $teas = array();

        while ($row = $result->fetch_assoc()) {
            $teas[] = new TeaModel($row['id'], $row['userId'], $row['options']);
        }

        return $teas;
    }
}


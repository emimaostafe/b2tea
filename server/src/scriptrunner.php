<?php

$ordersquery = "CREATE TABLE Orders (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    products VARCHAR(255) NOT NULL,
    total_price DECIMAL(10, 2),
    table_id INT,
    customers VARCHAR(255)
  )";

$db = new Database();
$db->query($ordersquery);

// this was runned once

?>  
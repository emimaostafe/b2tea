<?php

require_once 'config.php';

// Create a new database connection
try {
    $dsn = "pgsql:host={$config['host']};port={$config['port']};dbname={$config['database']}";
    $pdo = new PDO($dsn, $config['username'], $config['password']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Additional configuration options if needed

    // You can use the $pdo object for executing queries or pass it to other classes/functions
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    die();
}
//localStorage.getItem('cartItems')
?>

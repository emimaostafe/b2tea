<?php

require_once "config/constants.php";

class Database
{
    private $connection;

    public function __construct()
    {
    }

    private function connect()
    {
        $this->connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);

        // Check connection
        if ($this->connection->connect_error) {
            die("Connection to database failed: " . $this->connection->connect_error);
        }
    }

    public function query($sql)
    {
        $this->connect();

        // Execute query
        $result = $this->connection->query($sql);

        // Check for errors
        if (!$result) {
            die("Query failed: " . $this->connection->error);
        }

        $this->connection->close();

        return $result;
    }

    public function escape($value)
    {
        return $this->connection->real_escape_string($value);
    }

    public function execute($query)
    {
        $this->connect();

        if ($this->connection->query($query) === TRUE) {
            echo "Query executed.";
        } else {
            echo "Error creating table: " . $this->connection->error;
        }

        $this->connection->close();
    }

    public function getById($query, $id)
    {
        $this->connect();

        $statement = $this->connection->prepare($query);
        $statement->bind_param("i", $id);
        $statement->execute();

       return $statement->get_result();
    }
}
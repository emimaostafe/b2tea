<?php

class Request
{
    private $method;
    private $uri;

    function __construct()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->uri = $_SERVER['REQUEST_URI'];
    }

    function getUri(): string
    {
        return $this->uri;
    }

    function getMethod(): string
    {
        return $this->method;
    }

    function getCompleteHttpRequest() :string
    {
        $method = $this->getMethod();
        $uri = $this->getUri();

        // Retrieve all HTTP headers
        $headers = getallheaders();

        // Retrieve the raw HTTP request data
        $requestData = file_get_contents('php://input');

        // Construct the complete HTTP request string
        $requestString = $method . ' ' . $uri . ' HTTP/1.1' . PHP_EOL;
        foreach ($headers as $header => $value) {
            $requestString .= $header . ': ' . $value . PHP_EOL;
        }

        $requestString .= PHP_EOL . $requestData;

        return $requestString;
    }
}

$httpreq = new Request;
$httpreq->getCompleteHttpRequest();

?>


<?php

class BaseService {
    protected $rootUrl;

    public function __construct() {
        $config = include('config.php');
        $this->rootUrl = $config['apiUrl'];
    }

    public function getData($url) {
        // Send HTTP request to the API
        $response = file_get_contents($url);

        // Check if the request was successful
        if ($response !== false) {
            // Convert the JSON response to an associative array
            $data = json_decode($response, true);

            // Process the data
            if (!empty($data)) {
                return $data;
            } else {
                return [];
            }
        } else {
            return [];
        }
    }
}
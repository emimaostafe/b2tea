<?php

require_once('services/base.php');

class ProductsService extends BaseService {
    public function __construct() {
        parent::__construct();
    }

    public function baseUrl() {
        return $this->$rootUrl . '/api/products';
    }

    public function getProducts() {
        return $this->getData($this->baseUrl());
    }

    public function getProductById($id) {
        return $this->getData($this->baseUrl() . '/' . $id);
    }

    public function getFavoriteProducts() {
        return $this->getData($this->baseUrl() . '/favorites');
    }
}

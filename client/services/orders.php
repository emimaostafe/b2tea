<?php

require_once('services/base.php');

class OrdersService extends BaseService {
    public function baseUrl() {
        return $this->$rootUrl . '/api/orders';
    }

    public function getOrders() {
        return $this->getData($this->baseUrl());
    }
}
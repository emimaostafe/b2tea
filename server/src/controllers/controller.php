<?php

interface ControllerInterface
{
    /**
     * Handle the request.
     *
     * @return object The response object.
     */
    public function handle(): string;
}
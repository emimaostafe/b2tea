<?php

require_once('php/urlValidation.php');
/* require_once('controllers/')

use controllers\OrdersController;
use controllers\PersonsController; */

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

/*
$method = $_SERVER['REQUEST_METHOD'];
$url = $_SERVER['REQUEST_URI'];
*/

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

     if ($_SERVER['REQUEST_URI'] === '/api/products') {

        // $contoller = new ProductsController($dbConnection, )

         $products = [
             ['id' => 1, 'name' => 'Product 1', 'price' => 10],
             ['id' => 2, 'name' => 'Product 2', 'price' => 20],
             ['id' => 3, 'name' => 'Product 3', 'price' => 8]
         ];

         header('Content-Type: application/json');
         echo json_encode($products);
     }

     else if ($_SERVER['REQUEST_URI'] === '/api/products/favorites') {
          $products = [
             ['id' => 11, 'imageUrl' => 'https://i.ibb.co/xmc453j/travel-lover.jpg', 'name' => 'Forget Me Not', 'rating' => 4.3, 'description' => 'A delicate herbal tea with a subtle floral flavor, made from the blue blossoms of the forget-me-not plant.'],
             ['id' => 12, 'imageUrl' => 'https://i.ibb.co/LJq2Tfg/iced-tea.jpg', 'name' => 'Iced Orange', 'rating' => 4.7, 'description' => 'A refreshing iced tea made with fresh orange slices and a touch of rosemary, creating a zesty and invigorating drink perfect for warm days.'],
             ['id' => 13, 'imageUrl' => 'https://i.ibb.co/Gd0LgHm/sixteen-miles-out-lz-QCA9s-Wpw0-unsplash.jpg', 'name' => 'Apple Delight', 'rating' => 4.5, 'description' => 'A warming and aromatic tea made from dried apple pieces, infused with cinnamon and a hint of honey sweetness.'],
             ['id' => 14, 'imageUrl' => 'https://i.ibb.co/FxcLkkZ/nu-ma-uita.jpg', 'name' => 'Travel Lover', 'rating' => 4.6, 'description' => 'A rustic, mysterious blend of spices and herbs, with a hint of mint and forest fruis notes, to awaken your senses and inspire your travels.']
         ];

         header('Content-Type: application/json');
         echo json_encode($products);
     }


    else if ($_SERVER['REQUEST_URI'] === '/api/products/23') {
             $product = ['id' => 23, 'name' => 'ceai de tei', 'price' => 20];

             header('Content-Type: application/json');


    }

    else if ($_SERVER['REQUEST_URI'] === '/api/orders/45') {
        $order = [
            'id' => 45,
            'products' => [
                ['id'=> 11, 'sugar'=> 'low', 'caffeine'=> 'high', 'milk' => 'none'],
                ['id'=> 12, 'sugar'=> 'high', 'caffeine'=> 'low', 'milk' => 'all'],
            ],
            'price' => 132
        ];

        header('Content-Type: application/json');
        echo json_encode($order);
    }

    else {
        echo 'Ha ha ha! Nu primesti nimic!';
    }
   }


/*
header('HTTP/1.1 405 Method Not Allowed');
header('Allow: POST');
echo '405 Method Not Allowed';
*/
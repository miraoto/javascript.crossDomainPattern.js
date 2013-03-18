<?php
$jsonArray = array(
     array(
          'title'       => 'Test title 1',
          'description' => 'Decsciption',
          'url' => 'http://www.google.com'
     ),
     array(
          'title'       => 'Test title 2', 
          'description' => 'Decsciption', 
          'url' => 'http://www.google.com' 
     ),
     array(
          'title'       => 'Test title 3', 
          'description' => 'Decsciption', 
          'url' => 'http://www.google.com' 
     ),
     array(
          'title'       => 'Test title 4', 
          'description' => 'Decsciption', 
          'url' => 'http://www.google.com' 
     ),
     array(
          'title'       => 'Test title 5', 
          'description' => 'Decsciption', 
          'url' => 'http://www.google.com' 
     ),
);
header('Access-Control-Allow-Origin: *');
echo sprintf("callback(%s)",json_encode($jsonArray));


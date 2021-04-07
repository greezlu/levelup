<?php

$arr = [ 1, 111, [ 123, 453, [ 987, 6 ] ], 333 ];

var_dump( getFullArray($arr) );

function getFullArray ($array) {
  
  $newArr = array();

  foreach ($array as $value) {

    if (is_array($value)) {
      $newArr = array_merge($newArr, getFullArray($value));
    } else {
      array_push($newArr, $value);
    }
    
  }

  return $newArr;

}
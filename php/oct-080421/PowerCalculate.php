<?php
  
  $number = $_REQUEST["number"];
  $power = $_REQUEST["power"];
  
  $errors = array();
  
  if (!$number || !$power) {
    $errors[] = "Missing arguments";
  } else {
    if ($number < 0 || $power < 0) {
      $errors[] = "Arguments have to be positive numbers";
    }
    if ( floatval($power)/intval($power) !== 1 ) {
      $errors[] = "Power have to be integer";
    }
  }
  
  if (empty($errors)) {
    echo $number ** $power;
  } else {
    var_dump($errors);
  }
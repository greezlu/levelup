<?php

include("config.php");

spl_autoload_register(function($class){
  str_replace("\\", DIRECTORY_SEPARATOR, $class);
  $filePath = "vendor".DIRECTORY_SEPARATOR.$class.".php";
  if (file_exists($filePath)) {
    include_once($filePath);
  } else {
    return false;
  }
});

Router::init();

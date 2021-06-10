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

$usersDB = new User();

//var_dump($usersDB->getAllUsers());
//var_dump($usersDB->getUserByLogin("serken"));
//var_dump($usersDB->addUser("test", "1234", "test@email.com"));

Router::init();

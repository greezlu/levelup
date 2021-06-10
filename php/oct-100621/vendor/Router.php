<?php
  
  class Router {
    
    static protected $db;
    
    static public function init () {
  
      self::$db = new User();
      
      if ($_SERVER["REQUEST_METHOD"] === "GET") {

        $view = new View("users.php");
        $view->render(self::$db);

      } else if ($_SERVER["REQUEST_METHOD"] === "POST") {

        $user = filter_input_array(INPUT_POST);
  
        self::$db->addUser($user["login"], $user["password"], $user["email"]);

      } else {
        self::redirect();
      }
      
    }
    
    static public function redirect () {
      header("Location: index.php");
    }
    
  }
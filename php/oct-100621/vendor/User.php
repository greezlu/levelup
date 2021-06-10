<?php
  
  class User {
    
    public $db;
    
    public function __construct () {
      $this->db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
      if ($this->db->connect_errno) {
        var_dump($this->db->connect_error);
        exit();
      }
    }
    
    public function getAllUsers () {
      $result = $this->db->query("SELECT * FROM users;");
      return $result->fetch_all(MYSQLI_ASSOC);
    }
    
    public function getUserByLogin ($login) {
      $result = $this->db->query("SELECT * FROM users WHERE login = '$login' LIMIT 1;");
      return $result->fetch_all(MYSQLI_ASSOC);
    }
  
    public function addUser ($login, $pass, $email) {
      $pass = password_hash($pass, PASSWORD_DEFAULT);
      $query = "INSERT INTO `users` (`login`, `password`, `email`) VALUES ('$login', '$pass', '$email')";
      $request = $this->db->query($query);
      return $request;
    }
    
  }
<?php

class Router {

    static protected $db;

    static public function init () {

        self::$db = new User();

        if ($_SERVER["REQUEST_METHOD"] === "GET") {

            $view = new View("users.php");
            $view->render(self::$db);

        } else if ($_SERVER["REQUEST_METHOD"] === "POST") {

            $post = filter_input_array(INPUT_POST);

            if ( isset($post["delete"]) && isset($post["login"]) ) {
                self::$db->removeUser( $post["login"] );
            } else if (
                isset($post["login"]) &&
                isset($post["password"]) &&
                isset($post["password-verify"]) &&
                isset($post["email"])
            ) {
                self::$db->addUser($post["login"], $post["password"], $post["password-verify"], $post["email"]);
            }

            self::redirect();

        } else {

            self::redirect();
            
        }
    }

    static public function redirect () {
        header("Location: " . $_SERVER["REQUEST_URI"]);
    }
}

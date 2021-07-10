<?php

namespace Controllers;

use \Models\ApiModel;

class ApiController extends AbstractController {

    static public function index () {
        self::get();
    }
    
    static public function get () {

        session_start();

        if (!isset($_SESSION["user_name"]))  {
            http_response_code(401);
            exit();
        }

        $tasks = ApiModel::getAllPosts();
        header('Content-Type: application/json');
        echo json_encode($tasks);

        exit();

    }
    
    static public function create () {
        
        session_start();

        if (!isset($_SESSION["user_name"]))  {
            http_response_code(401);
            exit();
        }

        $body = filter_input(INPUT_POST, "body");
        $body = trim($body);
        $author = filter_input(INPUT_POST, "author_name");

        $createResult = ApiModel::createPost($body, $author);

        if ($createResult) {
            http_response_code(201);
        } else {
            http_response_code(500);
        }
        exit();

    }
    
    static public function login () {

        session_start();

        $name = filter_input(INPUT_POST, "name");

        if ($name) {
            $_SESSION["user_name"] = $name;
            http_response_code(202);
        } else {
            http_response_code(404);
        }

        exit();

    }

    static public function logout () {

        session_start();

        if (isset($_SESSION["user_name"])) {
            $_SESSION["user_name"] = NULL;
            http_response_code(200);
        } else {
            http_response_code(404);
        }

        exit();

    }
    
    static public function status () {

        session_start();

        if (isset($_SESSION["user_name"])) {
            header('Content-Type: text/plain');
            echo $_SESSION["user_name"];
            http_response_code(200);
        } else {
            http_response_code(403);
        }

        exit();
    }

}

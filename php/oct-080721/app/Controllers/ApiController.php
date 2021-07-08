<?php

namespace Controllers;

use \Models\ApiModel;
use \Core\View;

class ApiController extends AbstractController {

    static public function index () {
        self::get();
    }
    
    static public function get () {
        $tasks = ApiModel::getAllPosts();
        header('Content-Type: application/json');
        echo json_encode($tasks);
        exit();
    }
    
    static public function create () {
        $name = filter_input(INPUT_POST, "body");
        $author = filter_input(INPUT_POST, "author_name");
        ApiModel::createPost($name, $author);
        http_response_code(201);
    }
    
    static public function login () {
        session_start();
        $name = filter_input(INPUT_POST, "name");
        if ($name) {
            $_SESSION["user_name"] = $name;
            http_response_code(202);
        } else {
            http_response_code(403);
        }
    }
    
    static public function status () {
        session_start();
        if (isset($_SESSION["user_name"])) {
            http_response_code(200);
        } else {
            http_response_code(403);
        }
    }

}
<?php

namespace Core;

class Route {

    static public function start () {
    
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $data = filter_input_array(INPUT_GET);
        } else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = filter_input_array(INPUT_POST);
        } else {
            $data = [];
        }
        
//        var_dump($data);
//        exit();

        $uriComponents = self::getUriComponents();

        $controllerName = $uriComponents[0] ?? "index";
        $action = $uriComponents[1] ?? "index";
        
//        var_dump($controllerName, $action);
//        exit();

        $controller = "\\Controllers\\".ucfirst($controllerName)."Controller";

        if (!class_exists($controller) ) self::error404();

        if (!method_exists($controller, $action)) self::error404();
    
        $controller::$action($data);

    }
    
    static private function getUriComponents () {
    
        $uri = $_SERVER["REQUEST_URI"];
        $uri = strtolower($uri);
    
        $uriComponents = explode("/", $uri);
        array_shift($uriComponents);
        
        if ( empty(end($uriComponents)) ) array_pop($uriComponents);

        return $uriComponents;

    }

    static public function error404 () {
        http_response_code(404);
        echo "Page not found";
        exit();
    }
    
    static public function redirect ($controller = "index", $action = "index") {
        $url = "/";
        if ($controller) $url .= "$controller/$action";
        header("Location: $url");
        exit();
    }

}
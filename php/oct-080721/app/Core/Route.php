<?php

namespace Core;

class Route {

    static public function start () {

        $uriComponents = self::getUriComponents();
    
//        var_dump($uriComponents);
//        exit();

        $controllerName = isset($uriComponents[0]) && $uriComponents[0] ? $uriComponents[0] : "index";
        $actionName = isset($uriComponents[1]) && $uriComponents[1] ? $uriComponents[1] : "index";
        
    //    var_dump($controllerName, $actionName);
    //    exit();

        $controller = "\\Controllers\\".ucfirst($controllerName)."Controller";

        if (!class_exists($controller) ) self::error404();

        if (!method_exists($controller, $actionName)) self::error404();
    
        $controller::$actionName();

    }
    
    static private function getUriComponents () :array {
    
        $uri = $_SERVER["REQUEST_URI"];
        $uri = strtolower($uri);
        $uri = trim($uri, "/");

        $uriComponents = explode("/", $uri);

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

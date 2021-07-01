<?php

namespace Models;

class ViewModel {
    
    static protected $template;
    static protected $page;
    static protected $data;
    
    static protected function getUrl (string $controller, string $action = "index") {
        return "/$controller/$action";
    }

}
<?php

namespace Core;

class View {

    static public function render (string $page = "default") {
        $page = "view/$page.php";
        include_once $page;
    }

    static protected function getUrl (string $controller, string $action = "index") {
        return "/$controller/$action";
    }

}

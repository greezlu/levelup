<?php

namespace Controllers;

use \Core\View;

class IndexController extends AbstractController {
    
    static public function index () {
        session_start();
        View::render("default", "index_index");
    }

}
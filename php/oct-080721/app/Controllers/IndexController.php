<?php

namespace Controllers;

use \Core\View;

class IndexController extends AbstractController {
    
    static public function index () {
        View::render("default");
    }

}

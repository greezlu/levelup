<?php

namespace Controllers;

class IndexController extends AbstractController {
    
    static public function index () {
        \Core\View::render("default", "task_index");
    }

}
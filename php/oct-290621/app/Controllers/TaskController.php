<?php

namespace Controllers;

use Models\ApiModel;

class TaskController extends AbstractController {

    static public function index () {
        $tasks = \Models\ApiModel::getTasks();
        \Core\View::render("default", "task_index", $tasks);
    }

    static public function create () {
        \Core\View::render("default", "task_create");
    }

    static public function save (array $data) {

        if ( isset($data["id"]) ) {
            \Models\ApiModel::editTask(intval($data["id"]), $data["name"]);
        } else {
            \Models\ApiModel::createTask($data["name"]);
        }
        \Core\Route::redirect("task");
        
    }

    static public function edit (array $data) {
        $data["name"] = \Models\ApiModel::getTaskName(intval($data["id"]));
        \Core\View::render("default", "task_edit", $data );
    }

    static public function delete (array $data) {
        \Models\ApiModel::deleteTask(intval($data["id"]));
        \Core\Route::redirect("task");
    }

    static public function ajax () {
        $tasks = \Models\ApiModel::getTasks();
        echo json_encode($tasks);
    }
    
    static public function createtask () {
        $name = filter_input(INPUT_POST, "name");
        \Models\ApiModel::createTask($name);
        echo 1;
    }

}
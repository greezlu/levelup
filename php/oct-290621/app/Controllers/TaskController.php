<?php

namespace Controllers;

use Models\TaskModel;

class TaskController extends AbstractController {
    
    static public function index () {
        $tasks = \Models\TaskModel::getTasks();
        \Core\View::render("default", "task_index", $tasks);
    }
    
    static public function create () {
        \Core\View::render("default", "task_create");
    }
    
    static public function save (array $data) {

        if ( isset($data["id"]) ) {
            \Models\TaskModel::editTask(intval($data["id"]), $data["name"]);
        } else {
            \Models\TaskModel::createTask($data["name"]);
        }
        \Core\Route::redirect("task");
        
    }
    
    static public function edit (array $data) {
        $data["name"] = \Models\TaskModel::getTaskName(intval($data["id"]));
        \Core\View::render("default", "task_edit", $data );
    }
    
    static public function delete (array $data) {
        \Models\TaskModel::deleteTask(intval($data["id"]));
        \Core\Route::redirect("task");
    }

}
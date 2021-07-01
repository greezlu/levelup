<?php

namespace Models;

use \MySQL\Database;

class TaskModel {

    static public function getTasks () {
        return Database::selectAll("tasks_list");
    }
    
    static public function createTask (string $taskName) {
        \MySQL\Database::insert("tasks_list", ["name" => $taskName]);
    }
    
    static public function editTask (int $id, string $taskName) {
        \MySQL\Database::update("tasks_list", ["name" => $taskName], $id );
    }
    
    static public function deleteTask (int $id) {
        \MySQL\Database::delete("tasks_list", $id);
    }
    
    static public function getTaskName (int $id) {
        return \MySQL\Database::selectOne("tasks_list", "id", $id)["name"];
    }

}
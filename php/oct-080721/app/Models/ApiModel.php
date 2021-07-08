<?php

namespace Models;

use \MySQL\Database;

class ApiModel {

    static public function getAllPosts () {
        return Database::selectAll("posts");
    }

    static public function createPost (string $body, string $author) {
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
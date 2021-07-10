<?php

namespace Models;

use \Database\MySQL;

class ApiModel {

    static public function getAllPosts () {
        return MySQL::select("posts");
    }

    static public function createPost (string $body, string $author) {

        var_dump($body, $author);

        return MySQL::insert("posts", [
            "body" => $body,
            "author_name" => $author
        ]);

    }

}

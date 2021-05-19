<?php

/**
 * Main class to initiate admin script
 */
class AdminMain extends Main {

    /**
     * Main function. Initiate at the start of the admin script
     * @return void
     */
    public static function init () {

        $storage = new Storage();

        if ( $_SERVER["REQUEST_METHOD"] === "GET" ) {

            if ( isset($_SERVER["PATH_INFO"]) ) self::redirect();

            $data = $storage->getAllNotes();
            $pageFile = "./html/admin_main.php";
            $pageName = "Admin";

            $page = new Page($pageFile, $pageName);
            $page->render($data);

        } else if ( $_SERVER["REQUEST_METHOD"] === "POST" ) {

            if ( isset($_SERVER["PATH_INFO"]) ) self::error404();

            $note = filter_input(INPUT_POST, "note");

            if ( !is_null($note) ) {

                $storage->addNote($note);
                self::redirect();

            }

            $id = filter_input(INPUT_POST, "remove-id", FILTER_VALIDATE_INT);

            if ( !is_null($id) ) {

                $storage->removeNote($id);
                self::redirect();

            }

            self::error404();

        } else {

            self::error404();

        }

    }

}

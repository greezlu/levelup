<?php

/**
 * Main class to initiate script
 */
class Main {

    /**
     * Main function. Initiate at the start of the script
     * @return void
     */
    public static function init () {

        $storage = new Storage("./storage.json");
        $templateFile = "./html/main_template.php";

        if ($_SERVER["REQUEST_METHOD"] === "GET") {

            $id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

            if ( is_int($id) ) {

                $allNotesList = $storage->getAllNotes();

                if ( !isset($allNotesList[$id]) ) {
                    self::error404();
                }

                $data = $allNotesList[$id];
                $pageFile = "./html/one_note_page.php";
                $pageName = "Note $id";
                
            } else if ($id === null) {

                $data = $storage->getAllNotes();
                $pageFile = "./html/all_notes_page.php";
                $pageName = "Notes List";

            } else {

                self::error404();

            }

            $page = new Page($templateFile, $pageFile, $pageName);
            $page->render($data);

        } else if ( $_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["note"]) ) {

            $note = filter_input(INPUT_POST, "note");

            if ($note) {

                $storage->addNote($note);
                self::redirect();

            } else {

                self::error404();
            }       

        } else {

            self::error404();

        }

    }

    /**
     * Redirect to the 404 page
     * @return void
     */
    public static function error404 () {

        $templateFile = "./html/main_template.php";
        $pageFile =     "./html/error_page.php";
        $pageName =     "Error 404";

        $page = new Page($templateFile, $pageFile, $pageName);
        $page->render();

        exit();

    }

    /**
     * Redirect to main page
     * @return void
     */
    public static function redirect () {

        $templateFile = "./html/main_template.php";
        $pageFile =     "./html/all_notes_page.php";
        $pageName =     "Notes List";

        $page = new Page($templateFile, $pageFile, $pageName);
        $page->render();

    }

}

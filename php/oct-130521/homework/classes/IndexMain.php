<?php

/**
 * Main class to initiate index script
 */
class IndexMain extends Main {

    /**
     * Main function. Initiate at the start of the index script
     * @return void
     */
    public static function init () {

        $storage = new Storage();

        if ( $_SERVER["REQUEST_METHOD"] === "GET" ) {//TODO Проверить, чтобы запрос был в корень и только с единственным параметром

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

            $page = new Page($pageFile, $pageName);
            $page->render($data);

        } else {
                  
            self::error404();

        }

    }

}

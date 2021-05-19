<?php

/**
 * Main class to initiate script
 */
class Main {

    /**
     * Redirect to the 404 page
     * @return void
     */
    public static function error404 () {

        $pageFile =     "./html/error_page.php";
        $pageName =     "Error 404";

        $page = new Page($pageFile, $pageName);
        $page->render();

        exit();

    }

    /**
     * Redirect to main page
     * @return void
     */
    public static function redirect () {

        header("Location: {$_SERVER["SCRIPT_NAME"]}");
        exit();

    }

}

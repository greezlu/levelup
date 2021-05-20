<?php

/**
 * Main class to initiate script
 */
abstract class Main {

  /**
   * Initiate at the start of the script
   * @return void
   */
    abstract static public function init ();

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

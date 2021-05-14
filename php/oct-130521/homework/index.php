<?php

spl_autoload_register("autoload");

Main::init();

function autoload ($className) {

    $filePath = "./classes/$className.php";

    if (file_exists($filePath)) {

        include_once($filePath);
        return true;

    } else {

        return false;

    }

}

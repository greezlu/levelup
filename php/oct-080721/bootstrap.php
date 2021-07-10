<?php

spl_autoload_register(function ($class) {

    $filePath = "app/$class.php";
    $filePath = str_replace("\\", "/", $filePath);
    
    if (file_exists($filePath)) {
        include_once $filePath;
        return true;
    } else {
        return false;
    }

});

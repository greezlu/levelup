<?php

namespace Core;

class View extends \Models\ViewModel {
    
    static public function render (
        string $template = "default",
        string $page = "index_index",
        array $data = []
    ) {
        static::$data = $data;
        static::$template = "view/templates/$template.php";
        static::$page = "view/pages/{$template}_{$page}.php";
        include_once static::$template;
    }

}
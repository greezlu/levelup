<?php

/**
 * Class for rendering pages
 */
class Page {

    /**
     * Path to template file
     * @var string
     */
    private $templateFile;

    /**
     * Path to page file
     * @var string
     */
    private $pageFile;

    /**
     * List of the pathes to css files
     * @var array
     */
    private $cssList = [];

    /**
     * Page class constructor
     * @param string $templateFile Path to template file
     * @param string $pageFile Path to page file
     * @param string $pageName Name of the future page
     * @return void
     */
    public function __construct (string $templateFile, string $pageFile, string $pageName) {

        $this->templateFile = $templateFile;
        $this->pageFile = $pageFile;

        $this->cssList[] = "./style/main.css";

        $pageFilePathArray = explode("/", $pageFile);
        $pageFileName = array_pop($pageFilePathArray);
        $pageCss = "./style/" . substr($pageFileName, 0, -4) . ".css";
        $this->cssList[] = $pageCss;

        $this->pageName = $pageName;
        
    }

    /**
     * Function to include template
     * @param mixed $data Information to be used to page file
     * @return void
     */
    public function render ($data = null) {
        include_once($this->templateFile);
    }

}

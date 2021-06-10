<?php
  class View {
    public $template;
    public $page;
    
    public function __construct (
      $page,
      $template="main-template.php"
    ) {
      $this->template = $template;
      $this->page = $page;
    }
    
    public function render ($options=null) {
      include_once("view".DIRECTORY_SEPARATOR.$this->template);
    }
    
  }
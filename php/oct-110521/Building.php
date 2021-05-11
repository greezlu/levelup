<?php
  
  class Building
  {
    
    /**
     * Building length
     * @var $length
     */
    private $length;
    
    /**
     * Building width
     * @var $width
     */
    private $width;
  
    /**
     * Amount of Building floors
     * @var $floors
     */
    private $floors;
  
    /**
     * Building color
     * @var $color
     */
    private $color;
    
    /**
     * Creates Building instance
     * @var $length number
     * @var $width number
     * @var $floors number
     * @var $color string
     */
    public function __construct (

      $length,
      $width,
      $floors,
      $color

    ) {

      $this->length = $length;
      $this->width = $width;
      $this->floors = $floors;
      $this->color = $color;

    }
    
    public function __toString () {
      
      return "<pre>".
             "Длинна: $this->length".PHP_EOL.
             "Ширина: $this->width".PHP_EOL.
             "Этажи: $this->floors".PHP_EOL.
             "Цвет: $this->color".PHP_EOL.
             "Площадь: {$this->getSquare()}".PHP_EOL.
             "</pre>";
      
    }
    
    /**
     * Returns Building square
     * @return number
     */
    public function getSquare () {
      return $this->length * $this->width * $this->floors;
    }
    
  }
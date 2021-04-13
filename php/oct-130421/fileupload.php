<?php
  
  var_dump($_FILES);
  
  $errors = array();
  
  $image = $_FILES['picture'];
  
  move_uploaded_file($image['tmp_name'], "./upload/image.jpg");
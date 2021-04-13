<?php

function findErrors()
{

  $errors = array();

  if (isset($_GET["height"]) && isset($_GET["weight"])) {

    if (floatval($_GET["height"]) <= 0) {
      $errors[] = "Height parametr is incorrect" . PHP_EOL;
    }

    if (floatval($_GET["weight"]) <= 0) {
      $errors[] = "Weight parametr is incorrect" . PHP_EOL;
    }
  } else {

    $errors[] = "Missing arguments" . PHP_EOL;
  }

  return $errors;
}


function getMassIndex($height, $weight) {
  $height /= 100;
  return $weight / $height ** 2;
}

$errors = findErrors();

?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>oct-060421</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    form {
      width: 220px;
      display: flex;
      flex-direction: column;
      margin: 50px auto 0;
      background-color: #e0e0e0;
      border-radius: 4px;
      padding: 10px;
    }

    form input {
      width: 200px;
    }

    form input[type="number"] {
      margin-bottom: 10px;
    }

    form input[type="submit"] {
      cursor: pointer;
    }

    #error {
      width: 220px;
      padding: 10px;
      margin: 20px auto 0;
      background-color: #ffc8c8;
      border-radius: 4px;
      cursor: default;
    }

    #bmi {
      width: 220px;
      padding: 10px;
      margin: 50px auto 0;
      background-color: #e0e0e0;
      border-radius: 4px;
      cursor: default;
    }
  </style>
</head>

<body>

  <?php if ( count($errors) ) { ?>

  <form action="./index.php" method="get">

    <input type="number" name="height" min="0" placeholder="Height" required>
    <input type="number" name="weight" min="0" placeholder="Weight" required>
    <input type="submit" name="submit">

  </form>

  <?php if ( isset($_GET["submit"]) && count($errors) ) { ?>

  <div id="error">
    <b>Errors:</b><br>
    <?php foreach($errors as $err) { echo $err; } ?>
  </div>

  <?php }} else if ( isset($_GET["submit"]) ) {

    $height = floatval($_GET["height"]);
    $weight = floatval($_GET["weight"]);
  
    $massIndex = getMassIndex($height, $weight);

    ?>

    <div id="bmi">
      Your BMI: <?= round($massIndex, 2) ?><br>
      <?php if ($massIndex < 18.5) {
        echo "<b>Underweight</b>";
      } else if ($massIndex < 25) {
        echo "<b>Normal</b>";
      } else {
        echo "<b>Overweight</b>";
      }?>
      <br><a href="./">Home</a>
    </div>    
  <?php } ?>

</body>

</html>

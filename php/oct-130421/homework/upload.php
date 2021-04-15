<?php
include_once("config.php");

$errors = checkUpload();

if (!count($errors)) {
	addImage($_FILES["upload-picture"]);
} else {
	//SHOW ERROR
}

function addImage ($file) {

	$fileType = explode (".", $file["name"]);
	$fileType = $fileType[array_key_last($fileType)];
	
	if (!$fileType) return false;

	$fileName = uniqid();	

	$indexer = json_decode(file_get_contents("image-indexer.json")) ?? array();
	$indexer[] = [$fileName.".".$fileType, strtolower($_POST["contributor"])];
	file_put_contents("image-indexer.json", json_encode($indexer));
	
	return move_uploaded_file($file['tmp_name'], UPLOADS_PATH.$fileName.".".$fileType);

}

function checkUpload () {

	$errors = array();

	if (!isset($_FILES["upload-picture"])) {
		$errors[] = "Empty request";
		return $errors;
	}

	$image = $_FILES["upload-picture"];

	if ( $image["error"] !== 0 ) {

		$errors[] = ERROR_MESSAGE[$image["error"]] ?? "Error occured due to sending of the file";

	} else {

		if ( !in_array($image["type"], ALLOWED_TYPES) ) {
			$errors[] = "Incorect file type";
		}
	
		if ( $image["size"] > ALLOWED_FILE_SIZE ) {
			$errors[] = "Increased max file size";
		}

		if ( !isset($_POST["contributor"]) ) {
			$errors[] = "Missing author name";
		}

	}

	return $errors;

}
?>
<!doctype html>
<html lang="en">
	
  <head>
    <meta charset="utf-8">
		<link type="image/png" sizes="16x16" rel="icon" href="./images/favicon.png">
		<script defer>let errors = '<?= json_encode($errors) ?>';</script>
		<script defer type="text/javascript" src="./script/upload.js"></script>		
		<link rel="stylesheet" href="./style/style.css">
    <title>Homework</title>
  </head>

  <body>

		<div id="cover">

			<header></header>
			
			<div id="success">SECCESS</div>
			<div id="error">ERROR</div>

	</div>
  
  </body>
</html>
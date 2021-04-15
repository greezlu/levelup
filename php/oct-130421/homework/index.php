<!doctype html>
<html lang="en">
	
  <head>
    <meta charset="utf-8">
		<link type="image/png" sizes="16x16" rel="icon" href="./images/favicon.png">
		<script defer>let indexer = '<?= file_get_contents("image-indexer.json") ?>';</script>
		<script defer type="text/javascript" src="./script/home.js"></script>		
		<link rel="stylesheet" href="./style/style.css">
    <title>Homework</title>
  </head>

  <body>

    <div id="cover">

      <header></header>
      
      <form action="./upload.php" method="post" enctype="multipart/form-data">
        <input type="text" name="contributor" placeholder="Name" required>
        <label id="file-upload">Choose image<input type="file" name="upload-picture" required></label>
        <input type="submit" value="SEND">
      </form>

      <main></main>

      <footer>serken</footer>

    </div>
  
  </body>
</html>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>PowerForm</title>
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
        background-color: #dddddd;
        border-radius: 8px;
        padding: 10px;
      }
      
      form input {
        width: 200px;
      }
    
    </style>
  </head>
  <body>
    
    <form action="PowerCalculate.php" method="get">
      
      <input type="number" name="number" min="0" step="any">
      <input type="number" name="power" min="0">
      <input type="submit">
      
    </form>
  
  </body>
</html>
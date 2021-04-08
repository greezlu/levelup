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
    
    <form action="get.php" method="get">
      <label>
        Login
        <input type="text" name="login">
      </label>
      <label>
        Password
        <input type="password" name="pass">
      </label>
      <input type="submit">
    </form>
  
  </body>
</html>
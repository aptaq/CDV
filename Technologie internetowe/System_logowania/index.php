<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pl" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>System logowania</title>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
    <?php
    if (isset($_SESSION['error'])) {
      echo '<span class="red">', $_SESSION['error'], '</span>';
      unset($_SESSION['error']);
    }
     ?>
    <h4>Logowanie</h4>
    <form action="check.php" method="post">
      <input type="text" name="login" placeholder="login"><br><br>
      <input type="text" name="password" placeholder="password"><br><br>
      <input type="submit" name="przycisk" value="Zaloguj się"><br><br>
    </form>
  </body>
</html>

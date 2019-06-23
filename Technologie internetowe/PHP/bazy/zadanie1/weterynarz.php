<!DOCTYPE html>
<html lang="pl" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Weterynarz</title>
    <link rel="stylesheet" href="./weterynarz.css">
  </head>
  <body>
    <div id="banner"></div>
    <div id="left">
      <table >
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Owner</th>
          <th>Phone</th>
        </tr>
      <?php
      //connect server
        if ($connect = mysqli_connect('localhost','root',''))
          echo "Connection succes !<br>";
        else
          echo "Wrong connetion !<br>";

        //Connect Database
        if(mysqli_select_db($connect,'Weterynarz'))
            echo "Connection DB succes !<br><hr>";
        else
            echo "Wrong DB connetion !<br>";
        //chage
        mysqli_set_charset($connect,'utf8');
        $query="SELECT `id`,`imie`,`wlasciciel`,`telefon` FROM `zwierzeta` WHERE `rodzaj`=1";
        if (!$result=mysqli_query($connect,$query))
          echo "Error !<br>";

        //show answer
        while ($row = mysqli_fetch_array($result))
        {
          echo <<<WIERSZ
          <tr>
            <td>$row[id]</td>
            <td>$row[imie]</td>
            <td>$row[wlasciciel]</td>
            <td>$row[telefon]</td>
          </tr>
WIERSZ;
        }
        mysqli_close($connect);
       ?>
     </table>
    </div>
    <div id="right"></div>
    <div id="footer"></div>
  </body>
</html>

<?php
  //boolen
  $prawda = true;
  $falsz = false;

  $calkowita = 200;
  $hex =0xA;
  $oct =010;
  $bin = 0b1010;

  echo "$hex";
  echo '$hex';
  echo "<br>$bin";

//skladnia herdoc

$imie = 'Filip';
$napis = <<< TEKST
  Mam na imię :$imie
TEKST;

echo $napis;

echo<<<X
  <br>Mam na imie: $imie<br>
  Mieszkam w Poznaniu
X;

//skladnia nowdoc

echo<<<'X'
  <hr>Mam na imie: $imie <br>
  Mieszkam w Poznaniu <hr>
X;
//konkatenacja .
echo 'Mam na imie: '.$imie;
echo 'Mam na imie: ',$imie;
  ?>

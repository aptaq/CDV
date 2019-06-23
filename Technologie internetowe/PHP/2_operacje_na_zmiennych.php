<?php
  $potega=2**10;
  echo $potega;

  $modulo =11%2;
  /*
  operatory bitowe : and &, or |, not ~, xor ^,
  przesuniecie bitowe: << >>
  */

  $x=0b1010;
  echo "<br>$x<br>"; //10

  $y=$x>>1 ;//0b101 =>5
  echo "<br>$y<br>"; //10

  $y=$x<<2; //0b101000
  echo "<br>$y<br>"; //10

//operatory logiczne
//and, or , xor , &&, || !

$a=10.0;
$b= 10;

if ($a===$b)
{
  echo "Równe";
}else {
  echo "Różne";
}

echo "<br>"
echo gettype($a);//double
echo "<br>"
echo gettype($b);//int
echo "<hr>"



$x=2;
echo $x++;
echo ++$x;
echo $x;
$y= $x++;
echo $y;
$y= ++$x;
echo $y;
echo ++$y;



 ?>

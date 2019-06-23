/*let i;
for (i = 1; i <= 10; i++) {
  document.write(i,' ');
}
*/
/* Wyswietl liczby od <20:5>*/

let x='';
for (i = 20; i >= 5; i--)
{
  if(i==5)
  {
      x+=i+'.';
  }else {
      x+=i+', ';
  }
}
document.write(x+'<hr>');

/*wypisz liczby z przedziału 2-16 parzyste i podzielne przez 4*/

let p='';
for (var i =2; i <=16 ;i++)
{
  if(i%2==0 & i%4==0)
  {
    p+=i+', ';
  }
}
document.write(p+'<hr>');

/*choinka*/
for (let i=1;i<=5;i++)
{
  document.write('</br>');
  for (let j = 1; j <=i; j++)
    {
      document.write('*');
    }
}
document.write('<hr>');

let znak=prompt('Jaki znak ?');
let ile=prompt('Jak duza choinka ?');

for (let i=1;i<=ile;i++)
{
  document.write('</br>');
  for (let j = 1; j <=i; j++)
    {
      document.write(znak);
    }
}
document.write('<hr>');

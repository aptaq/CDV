alert('dupa');
let i=0;
while (i<5)
{
  document.write(i+' ');
}
while (i++<10)
{
  document.write(i+' ');
}


//----------------------------------------
let tab ['julia','Anna','Krystian'];

for (i = 0; i < tab.length; i++) {
  document.write(tab[i]+ ' ');
}

function p(a){
  document.write(a +'<br>');
}

tab.foreEACH(p);

function pokaz(wartosc,index){
  document.write(index + 1 + '-element tablicy wynosi + ');
  document.write(wartosc + '<br>');
}

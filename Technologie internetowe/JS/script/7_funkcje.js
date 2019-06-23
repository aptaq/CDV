//funkcja zwracajaca dwie wartosci

function poleObjetosc(szerokosc,dlugosc,wysokosc)
{
  let pole= szerokosc * wysokosc;
  let objetosc= pole* wysokosc;
  let wynik=[pole,objetosc];
  return wynik;
}



let pole = poleObjetosc(2,3,4)[0];
let objetosc = poleObjetosc(2,3,4)[1];
//document.write('Pole wynosi: '+ pole);
document.write(`<br>Pole wynosi: ${pole}`);
document.write(`<br>Objetosc wynosi: ${objetosc}`);

let komunikat =document.getElementById('komunikat');
let wiek=prompt('Podaj swoj wiek');



if(wiek>=18)
{
  //pelnoletni
  komunikat.innerHTML='Jestes pelnoletni'
}else {
  //dziecko
    komunikat.innerHTML='Jestes dziecko'
}

let text = 'Janusz';

let regula=/Jan/;
regula=/^Jan$/;
let sprawdz = regula.test(text);
//console.log(sprawdz);

let elimie = document.getElementById('imie');
let elprzycisk= document.getElementById('przycisk');
let imie='';
let regulaImie =/^[a-z]|[ąężźśćńół]{1,5}$/i;
function spraw()
{
  imie=elimie.value;
  sprawdz=regulaImie.test(imie);
  console.log(sprawdz);
}
elprzycisk.addEventListener('click',spraw);


//zad dom IP MAC
//192.168.10.1
//192.169.10.1/24
//00:11:22:33:AA:CC
//00 11 22 33 AF CC
//00112233AFCC

let text = 'CDV - technologie internetowe';
console.log(text);
console.log('dlugosc: '+ text.length);

let first = text.charAt(0);
let first1 = text[0];
console.log(first);
console.log(first1);


let dlugosc= text.length;
let last = text[dlugosc-1];
console.log(last);


console.log(text.charCodeAt(0)); //67


let tekst ='jaNusZ';
let znak;

for (let i = 0; i < tekst.length; i++)
{
  znak=tekst.charCodeAt(i);
  if(znak>=65 && znak <=90)
   {
    document.write('Jest duza litera: '+tekst[i]);
    break;
   }
}

let capital = tekst.toUpperCase();
let lower = tekst.toLowerCase();

//**************************************************8
let elImie=document.getElementById('imie');
let elKomunikat=document.getElementById('komunikat');
let elPrzycisk=document.getElementById('przycisk');


function wyswietl()
{
  let imie = elImie.value;
  imie=imie.charAt(0).toUpperCase()+imie.slice(1).toLowerCase();
  imie=imie.substr(0,10);
  elKomunikat.innerHTML= 'Imie ograniczone do 10 znakow: <span style="color:red">'+imie+'</span>' ;
}
elPrzycisk.addEventListener('click',wyswietl);

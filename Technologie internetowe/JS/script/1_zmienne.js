//alert('zewnetrzny skrypt');

let zmiena=8;
let imie='Janusz';
let nazwisko='Nowak';

document.write('Twoje imie ' + imie);
console.log(nazwisko);

let x=2;
let y=10;
let suma=x+y
document.write('<br> Suma = '+suma);

let iloraz=x/y;
console.log(iloraz);
//potegowanie

let potea = Math.pow(2,10);
console.log(potea); //1024

// modulo
let modulo = 17%5;
console.log(modulo); //2

//type
let a=8, b='2'
console.log(typeof(a)); //number
console.log(typeof(b)); //string

let prawda=true;
console.log(typeof(prawda)); //boolean

let pusta;
console.log(typeof(pusta));//undefined

let nic=null
console.log(nic);//object

let liczba1=prompt('Podaj pierwsza liczbe ');
let liczba2=prompt('Podaj druga liczbe ');

liczba1=parseInt(liczba1);
liczba2=parseInt(liczba2);

suma=liczba1+liczba2;
console.log(typeof(suma));
document.write('<br>Suma wynosi:  '+suma);


let dlugosc=prompt('Podaj dlugosc ');
let szerokosc=prompt('Podaj szerokosc ');

dlugosc=parseFloat(dlugosc);
szerokosc=parseFloat(szerokosc);

let pole=dlugosc*szerokosc;
document.write('<br>Dlugosc = '+dlugosc);
document.write('<br>Szerokosc = '+szerokosc);
document.write('<br><span id ="czerwony">Pole = '+pole+'cm<sup>2</sup></span>');

//tworzenie tablicy za pomoca literalu tablicy

let kolory= ['red','green','blue'];
console.log(kolory[0]);

//tworzenie tablicy za pomoca konstruktora Array

let auta =new Array('BMW','FIAT','AUDI');
console.log(auta);

auta.push('Ferrari');
console.log(auta);

let lastcar = auta[auta.length -1];
console.log(lastcar);

//tablice wielowymiarowe
let tab = new Array(
  new Array('janusz','Kowalski','Poznań'),
  new Array('anna','nowak','gniezno'),
  new Array('Tomasz','Kowalski','Poznań'),

);
console.log(tab[0]);
console.log(tab[1][2]);

let name = ['Julia','Tomasz','Anna'];
console.log(name);

let sort=name.sort();
console.log(sort);

let rsort=name.reverse();
console.log(rsort);

console.log(name.indexOf('Anna'));
console.log(name.indexOf('XYZ'));


name.pop();
console.log(name);

name.unshift('Janusz');
console.log(name);

//tablica z liczbami


let liczby=[1,3,30,150,-10,1400]
console.log(liczby);
let numberSort = liczby.sort();
console.log(numberSort);

liczby.sort(function (a,b){
  return(a-b);
})
console.log(liczby);

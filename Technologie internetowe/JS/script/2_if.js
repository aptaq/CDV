let elementkomunikat =document.getElementById('komunikat');
let x= prompt('Podaj co chcesz obliczyć',' k- kwadrat, p-prostokat, t-trojkat ');
let pole,boka,bokb;

if(x=='k'){
  boka=prompt('Podaj bok a');
  pole=Math.pow(boka,2);
  elementkomunikat.innerHTML='Pole kwadratu = '+ pole+'cm<sup>2</sup>';
} else if (x=='p') {
  boka=prompt('Podaj bok a');
  bokb=prompt('Podaj bok b');
  pole = boka*bokb;
  elementkomunikat.innerHTML='Pole prostokata = '+ pole+'cm<sup>2</sup>';

}else if (x=='t') {
  boka=prompt('Podaj podstawe trójkąta');
  bokb=prompt('Podaj wysokosc trójkąta');

  pole=boka*bokb*0.5;
  elementkomunikat.innerHTML='Pole trojkata = '+ pole+'cm<sup>2</sup>';

}else {
  elementkomunikat.innerHTML='<span style="color:red">Błędne dane</span>';
}

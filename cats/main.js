// Milestone 1

// Definire un array di oggetti;
// ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
const cats = [
{
  nome: 'micio',
  eta: 5,
  colore: 'maculato',
  sesso: 'maschio'
},
{
  nome: 'teo',
  eta: 3,
  colore: 'bianco',
  sesso: 'maschio'
},
{
  nome: 'luna',
  eta: 1,
  colore: 'nero',
  sesso: 'femmina'
},
{
  nome: 'giada',
  eta: 10,
  colore: 'rosso',
  sesso: 'femmina'
},
{
  nome: 'tigre',
  eta: 7,
  colore: 'tigrato',
  sesso: 'femmina'
}
];

console.log(cats);

// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
cats.forEach((element) => {
  console.log(`Il gatto dal nome ${element.nome} è di colore ${element.colore}`);
});

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso
const mCats = cats.filter((element) => element.sesso == 'maschio');
const fCats = cats.filter((element) => element.sesso == 'femmina');

console.log(mCats);
console.log(fCats);
console.log($('#listaGatti'));
console.log($('#ciao'));
$('#ciao').text('miao');
// e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio
// mCats.forEach((element) => {
//   if (element.sesso == 'maschio') {
//     $('#listaGatti').append(`<li> ${element.nome} <i class="fas fa-ribbon blu"></i> </li>`);
//   } else {
//     $('#listaGatti').append(`<li> ${element.nome} <i class="fas fa-ribbon rosa"></i> </li>`);
//   }
// });



// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

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

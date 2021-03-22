$(document).ready(function(){

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
    $('#listaGatti').append(`<li> Il gatto ${element.nome} è di colore ${element.colore}`);
  });

  // Milestone 2
  // Dividere i gatti in due contenitori distinti in base al sesso
  const mCats = cats.filter((element) => element.sesso == 'maschio');
  const fCats = cats.filter((element) => element.sesso == 'femmina');

  console.log(mCats);
  console.log(fCats);
  console.log($('#listaGatti'));
  // e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio  
    // se il gatto ha tre o meno anni, il fiocco avrà opacità più tenue
  let coloreFiocco;
  let opacity;

  cats.forEach((element) => {
    if (element.sesso == 'maschio') {
      coloreFiocco = 'blu'
        if (element.eta <= 3) {
          opacity = 'light'
        } else {
          opacity = 'dark'
        }
    } else {
      coloreFiocco = 'rosa'
        if (element.eta <= 3) {
          opacity = 'light'
        } else {
          opacity = 'dark'
        }
    };

    $('#listaGattiDue').append(`<li> Gatto ${element.nome} <i class="fas fa-ribbon ${coloreFiocco} ${opacity}"></i></li>`)
  });





})

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
    console.log(`Il gatto dal nome ${element.nome} è di colore ${element.colore}`);
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
  cats.forEach((element) => {

    if (element.sesso == 'maschio') {
      if (element.eta <= 3) {
          $('#listaGatti').append(`<li> ${element.nome} <i class="fas fa-ribbon blu light"></i> </li>`);
      } else {
          $('#listaGatti').append(`<li> ${element.nome} <i class="fas fa-ribbon blu"></i> </li>`);
      }
    } else {
      if (element.eta <= 3) {
          $('#listaGatti').append(`<li> ${element.nome} <i class="fas fa-ribbon rosa light"></i> </li>`);
      } else {
          $('#listaGatti').append(`<li> ${element.nome} <i class="fas fa-ribbon rosa"></i> </li>`);
        }
      }
    });

  // Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio,
  // inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto.
  const newCats = [
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


  // prendere l'array di oggetti e creare un array con solo il nome dei gatti

  let newMCats = newCats.filter((element) => element.sesso == 'maschio');
  let newFCats = newCats.filter((element) => element.sesso == 'femmina');
  console.log(newMCats);
  console.log(newFCats);


  var newMCatsNome = [];

  for (var i = 0; i < newMCats.length; i++) {
    newMCatsNome.push((newMCats[i]['nome']));
  }

  console.log(newMCatsNome);

  var newFCatsNome = [];

  for (var i = 0; i < newFCats.length; i++) {
    newFCatsNome.push((newFCats[i]['nome']));
  }
  console.log(newFCatsNome);
  let color;
  let opacity;
  newCats.forEach((element, i , array) => {
    console.log(array);

    if (element.sesso == 'maschio') {
      color = 'blu';
      if (element.eta <= 3) {
        opacity = 'light';
      } else {
        opacity = 'dark';
      }
    } else {
      color = 'rosa';
      if (element.eta <= 3) {
        opacity = 'light';
      } else {
        opacity = 'dark';
      }
    }
  });

  const mergedCats = newCats.map((element, i, array) =>{
    let obj = {
      ... element,
      color,
      opacity
    }
    return obj
  })
  console.log(mergedCats);



})

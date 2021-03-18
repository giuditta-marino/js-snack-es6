// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

$(document).ready(function(){

  const bikes = [
        { nome: "bmx",
        peso: 3 },
        { nome: "graziella",
        peso: 2 },
        { nome: "mountain bike",
        peso: 5
        }
  ];

  console.log(bikes);

  let biciLeggera = bikes[0];
  let index = 0;

  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].peso < biciLeggera.peso) {
      biciLeggera = bikes[i];
      index = i +1;
    }
  }
   console.log(biciLeggera);
   console.log(index);
   const {peso, nome} = biciLeggera;
   console.log(`La bici con il peso più leggero è ${nome} e il suo peso è ${peso}, che nell'elenco ha la posizione n. ` + index);

})

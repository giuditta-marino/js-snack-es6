// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

$(document).ready(function(){
  const teams = [
    {nome: 'Italia',
    punti_fatti: 0,
    falli_subiti: 0},

    {nome: 'Francia',
    punti_fatti: 0,
    falli_subiti: 0},

    {nome: 'Brasile',
    punti_fatti: 0,
    falli_subiti: 0},

    {nome: 'Giappone',
    punti_fatti: 0,
    falli_subiti: 0},
  ];
  console.log(teams);

  function numberRandomInRange(max){

    var numberComputer = Math.floor(Math.random() * (max - 1 + 1) + 1);

    return numberComputer;
  }

  const nomi_falli = [];

  for (let i = 0; i < teams.length; i++) {
    const thisTeam = teams[i];

    thisTeam.punti_fatti = numberRandomInRange(20);
    thisTeam.falli_subiti = numberRandomInRange(10);

    const {nome, falli_subiti} = thisTeam;

    nomi_falli.push({
      nome,
      falli_subiti
    });

    console.log(nomi_falli);
  }

  function myFunction(...myArguments) {
    console.log(myArguments);
  }





})

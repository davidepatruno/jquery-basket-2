var giocatori = [];

//Creo gli oggetti e gli assegno dei valori
for (var i = 0; i < 100; i++) {
    var codiceGiocatore = creaCodice();
    var puntiFatti = Math.floor(Math.random() * 31);
    var rimbalzi = Math.floor(Math.random()*(55 - 20 + 1) + 20);
    var falli = Math.floor(Math.random() * 3);
    var percSuccDuePunti = Math.floor((Math.random() * 100) + 1);
    var percSuccTrePunti = Math.floor((Math.random() * 100) + 1);
    var nomeGiocatore = {
        "codice_Giocatore" : codiceGiocatore,
        "punti_Segnati" : puntiFatti,
        "num_Rimbalzi" : rimbalzi,
        "falli" : falli,
        "successo_duePunti" : percSuccDuePunti,
        "successo_trePunti" : percSuccTrePunti
    }

    giocatori.push(nomeGiocatore);
    console.log(nomeGiocatore);


    var codgiocatoretemp = $('.template .giocatore_template').clone();
    codgiocatoretemp.text(codiceGiocatore);
    $('.giocatore').append(codgiocatoretemp);

};





function creaCodice(){
    var codePlayer = "";
    var casualNumber = "";

    for (var i = 0; i < 3; i++) {
      //Genero una lettera casuale maiuscola prendendo i valori dall'unicode
      var casualLetter = String.fromCharCode(Math.floor((Math.random()*(90 - 65 + 1) + 65)));
      codePlayer += casualLetter;
    }

    for (var i = 0; i < 3; i++) {
      casualNumber = Math.floor((Math.random() * 9) + 1);
      codePlayer += casualNumber;
    }

    return codePlayer;
}

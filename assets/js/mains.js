$(document).ready(function () {
  //on initalise les score
  var win=0;
  var lose=0;
  var draw=0;

  $('#go').click(function() {
    var chosemen = $('#select').val();
    //je on fait le choix de pierre feuille ou ciseaux pour l'humain
    var bot = Math.floor(Math.random() *3)+1;
    //On definie la variable pour le bot si il va choisire p f ou c
    switch (chosemen){
      //si je prend pierre
      case 'pierre':

    switch (bot) {
      case 1: // pierre
        console.log("Égalité !");
        $('#draw').text(++draw)
        $("#res").text("Pierre VS Pierre");
        break;
      case 2: //feuille
        console.log('Perdu !');
        $('#lose').text(++lose);
        $('#res').text('Pierre VS Feuille');
        break;
      case 3: //ciseaux
        console.log('Victoire !');
        $('#win').text(++win)
        $("#res").text('Pierre VS Ciseaux');
        break;
      }
      break;
      //J'ai choisie feuille
      case 'feuille':

      switch (bot) {
        case 1: //pierre
          console.log('Gagné !');
          $('#win').text(++win)
          $('#res').text('Feuille VS Pierre')
          break;
        case 2: //feuille
          console.log('Egalité !')
          $('draw').text(++draw)
          $('#res').text('Feuille VS Feuille')
          break;
        case 3: //ciseaux
          console.log('Perdu !')
          $('#lose').text(++lose)
          $('#res').text('Feuille VS Ciseaux')
          break;
      }
      break;
      //je choisie ciseaux
      case 'ciseaux':

      switch (bot) {
        case 1: //pierre
          console.log('Perdu !')
          $('#lose').text(++lose)
          $('#res').text('Ciseaux VS Pierre')
          break;
        case 2: //feuille
          console.log('Victoire !')
          $('#win').text(++win)
          $('#res').text('Ciseaux VS Pierre')
          break;
        case 3: //ciseaux
          console.log('Egalité !')
          $('#draw').text(++draw)
          $('#res').text('Ciseaux VS Ciseaux')
          break;
      }
      break;
    }
  });
});

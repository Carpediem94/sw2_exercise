/* Main Dicerool file */
var dice = 0;
var dado;

$(document).ready(function(){  
  $('.btn-roll').hide();
  
  $('.btn-start').click(function() {
    dice = $('#dice').val();
    if (dice<1 || dice>9) {
      alert("inserisci un numero compreso tra 1 e 9");
      $('#dice').addClass('error');
    } else {
      //alert("number of dices: " + dice);
      //e.preventDefault();

      for(var i=0; i<dice; i++) {
        $('.tab').append("<td><img src=\"img/dice-" + roll() + ".png\"></td>");  
      }
      $('.btn-roll').show();
      $('.txt').hide();
    }
  });
  
  $(".btn-roll").click(function(){
    $('.tab').empty();
    for(var i=0; i<dice; i++) {
      $('.tab').append("<td><img src=\"img/dice-" + roll() + ".png\"></td>");  
    }
  });
  
  function roll () {
    dado = Math.round(Math.random() * 5 + 1);
    return dado;
  }
    
});

/* Main Dicerool file */
var dice;
var dado;

$(document).ready(function(){  
  $('.btn-roll').hide();
  
  $('.btn-start').click(function(e) {
    dice = $('#dice').val();
    //alert("number of dices: " + dice);
    e.preventDefault();
    
    for(var i=0; i<dice; i++) {
      $('.tab').append("<td><img src=\"img/dice-" + roll() + ".png\"></td>");  
    }
    $('.btn-roll').show();
  });
  
  $(".btn-roll").click(function(event){
    event.preventDefault();
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

/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet
var id;
var k = 1;

$(document).ready(function(){
  start(); 
  
  $('button').click(function() {
    $('li').removeClass('done').addClass('hidden');
  });
  
  function start() {
    $('.cards').empty();
    data = generateData(10);
    for (var i=0; i<data.length; i++) {
      $('.cards').append("<li id=\"" + data[i] + "\" class=\"done\"><h3>" + data[i] + "</h3></li>");
    }
    k = 1;
    
    $('li').click(function() {
      $(this).removeClass('hidden').addClass('done');
      game(this);
    });
  }
  
  function game(a) {
    id = a.getAttribute('id');
    if(id != k) {
      alert("You lost");
      start();
    } else if (k == 10) {
      alert("You win");
      start();
    } else {
      k++;
    }
  }
    
});








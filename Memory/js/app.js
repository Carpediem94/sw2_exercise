var id;
var k = 1;
var ver = false;

$(document).ready(function(){
  start(); 
  
  $('button').click(function() {
    $('li').removeClass('done').addClass('hidden');
    ver = true;
  });
  
  function start() {
    ver = false;
    $('.cards').empty();
    data = generateData(10);
    for (var i=0; i<data.length; i++) {
      $('.cards').append("<li id=\"" + data[i] + "\" class=\"done\"><h3>" + data[i] + "</h3></li>");
    }
    k = 1;
    
    $('li').click(function() {
      if(ver) {
        $(this).removeClass('hidden').addClass('done');
        game(this);  
      }
      
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








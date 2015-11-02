/* your code should go here */
var beer = 0;
var drink = 0;

$(document).ready(function(){
  
  $('.nodrink').hide();
  
  for(var i=0; i<data.length; i++) {
    $('.drinks').append("<div>" + 
                        "<img src=\"" + data[i].image + "\">" +
                        "<h2>" + data[i].name + "</h2>" +
                        "<p>" + data[i].glassML + "</p>" +      
                        "<button id=\"beer\" value=\"" + (data[i].glassML*data[i].lavel) + "\">Drink</button>" +
                        "</div>");
  }
  
  $('button').click(function() {
    beer = $(this).val();
    
    drink = parseInt(drink) + parseInt(beer);
    console.log(drink);
    if(drink>500) {
      $('.candrink').hide();
      $('.nodrink').show();
    }
  });
  
});
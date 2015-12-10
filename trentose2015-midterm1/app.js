/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

var phrase = "";
var check = 0;
var i = 0;

$(document).ready(function(){

  $('.sentences').append( ' <li id="ID">' +
                            '  <h3>' + data[i].phrase_en + '</h3>' +
                            ' </li> ');
  
  $('.opt-continue').click(function(){
    $('.sentences').empty();
    phrase = $('#iSolution').val();
    if (phrase=="") {
      $('.sentences').append( ' <li id="ID">' +
                              '  <h3>' + data[i].phrase_en + '</h3>' +
                              ' </li> ');
      alert("Insert an answer");
    } else if(i == (data.length-1)) {
      console.log();
      $('.practice').hide();
      $('.final').append('<h3> You have solved <span id="tot-good">'+check+'</span> of <span id="tot">'+(i+1)+'</span></h3>')
    } else {    
      if(phrase == data[i].phrase_de) {
        check++;
        console.log(check);
      }
      i++;
      $('.sentences').append( ' <li id="ID">' +
                              '  <h3>' + data[i].phrase_en + '</h3>' +
                              ' </li> ');
    }
  });
});








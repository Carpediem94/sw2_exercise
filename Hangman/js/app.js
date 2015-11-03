/* Hangman file */
var word;
var secretWord = "";
var maskedWord = [];
var a = "";
var win = 0;
var h = 0;
var sw = -1;

var hang = ["", "abietto", "atavico", "affrancare", "cane", "gatto", "atterrito"];

$(document).ready(function(){       
  
  $('#msg-w').hide();
  $('#msg-l').hide();
  start();
  
  $('.btn-try').click(function() {
    a = $('#letter').val();
    control(a);
  });
  
  function start() {
    $('.hman').append("<img src=\"img/hman-0.png\">");
    word = Math.round(Math.random() * 5 + 1);
    secretWord = hang[word];
    console.log("Secret: " + secretWord);
    for (var i=0; i<hang[word].length; i++) {
      maskedWord[i] = "_";
      $('#secret-word').append(maskedWord[i] + " ");
    }
    console.log("Masked: " + maskedWord);
  }
  
  function control (a) {
    $('#secret-word').empty();
    sw = secretWord.indexOf(a);
    console.log("sw: " + sw);
    //inserisce la nuova lettera nella maskedWord se è presente nella secretWord e incrementa la variabile win
    for (var i=0; i<hang[word].length; i++) {
      if(a == secretWord[i]) {
        $('#secret-word').append(a + " ");
        maskedWord[i] = a;
        win++;
        if (win == hang[word].length) {
          alert("You won");
          $('#msg-w').show();
        }
      } else {
        $('#secret-word').append(maskedWord[i] + " ");
      }
    }
    
    //se la variabile sw è negativa 
    if(sw < 0) {
      sw = -1;
      h++;
      $('.hman').empty();
      $('.hman').append("<img src=\"img/hman-" + h + ".png\">");
      //console.log("h: " + h);
      if(h == 6) {
        $('#msg-l').show();
      }
    }
  }
  
  
});

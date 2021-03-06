/* Hangman file */
var word;
var secretWord = "";
var maskedWord = [];
var a = "";
var win = 0;
var h = 0;
var sw = -1;
var data;

$(document).ready(function(){       
  $('#msg-w').hide();
  $('#msg-l').hide(); 
  
  RandomWord(function() {

    start();

    $('.btn-try').click(function() {
      a = $('#letter').val();
      control(a);
    });

    function start() {
      $('.hman').append("<img src=\"img/hman-0.png\">");
      secretWord = word;
      for (var i=0; i<word.length; i++) {
        maskedWord[i] = "_";
        $('#secret-word').append(maskedWord[i] + " ");
      }
    }

    function control (a) {
      $('#secret-word').empty();
      sw = secretWord.indexOf(a);
      //inserisce la nuova lettera nella maskedWord se è presente nella secretWord e incrementa la variabile win
      for (var i=0; i<word.length; i++) {
        if(a == secretWord[i]) {
          $('#secret-word').append(a + " ");
          maskedWord[i] = a;
          win++;
          if (win == word.length) {
            $('#msg-w').show();
            $('.word').hide();
          }
        } else {
          $('#secret-word').append(maskedWord[i] + " ");
        }
      }

      //se la variabile sw è negativa incrementa l'hangman 
      if(sw < 0) {
        sw = -1;
        h++;
        $('.hman').empty();
        $('.hman').append("<img src=\"img/hman-" + h + ".png\">");
        if(h == 6) {
          $('#msg-l').show();
          $('.word').hide();
        }
      }
    }
  });
});

var url = "http://www.omdbapi.com/?s=";
var ver = true;
var film = [];

$(document).ready(function () {
  
  $('.btn-search').click(function() {
    $('.movies').empty();
    title = $('#title').val();
    //console.log(title);
    url = "http://www.omdbapi.com/?s=" + title;
  
    $.getJSON(url, function(json){      
      console.log("we process the output");

      for(var i=0; i<json.Search.length; i++) {
        for(var j=0; j<film.length; j++) {
          if(json.Search[i].Title == film[j]) {
            ver = false;  
          }
        }
        if (ver) {
          $('.movies').append(
                            '<div class="col-sm-6 col-md-4">' +
                            ' <div class="thumbnail">' +
                            '   <div class="text-center">' +
                            '     <img src="' + json.Search[i].Poster + '" alt="poster">' +                
                            '       <div class="caption">' +
                            '         <h3 class="truncate">' + json.Search[i].Title + '</h3>' +                          
                            '         <a href="http://www.imdb.com/title/' + json.Search[i].imdbID + '" class="btn btn-primary" role="button">Details</a>' +
                            '       </div' +
                            '   </div>' +
                            ' </div>' +
                            '</div>');
          }
        film[i] = json.Search[i].Title;
        ver = true;
      }
      film = [];
    })
    .done(function() {
      console.log( "second success" );
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });

    console.log("normal stuff");
  
  });
});


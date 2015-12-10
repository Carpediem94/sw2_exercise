/* your code should go here */
var id;
var check;

$(document).ready(function() {
  
  $('.tab').append( "<tr class=\"first-row\">" +
                        "<td>Airline</td>" +
                        "<td>Flight</td>" +
                        "<td>Destination</td>" +
                        "<td>Departure time</td>" +
                        "<td>Status</td>" +
                        "<td>Gate</td>" +
                      "</tr>");
  
  for(var i=0; i<voli.length; i++) {
    $('.tab').append( "<tr>" +
                        "<td>" + voli[i].airline + "</td>" +
                        "<td>" + voli[i].flight + "</td>" +
                        "<td>" + voli[i].destination + "</td>" +
                        "<td>" + voli[i].departure_time + "</td>" +
                        "<td " + setColor(voli[i].status) + "</td>" +
                        "<td>" + voli[i].gate + "</td>" +
                      "</tr>");
  }
  
  $('.check').click(function() {
    $('.tab').empty();
    $('.tab').append( "<tr class=\"first-row\">" +
                        "<td>Airline</td>" +
                        "<td>Flight</td>" +
                        "<td>Destination</td>" +
                        "<td>Departure time</td>" +
                        "<td>Status</td>" +
                        "<td>Gate</td>" +
                      "</tr>");
    
    $(":checked").each(function() {
      check = $(this).val();
      
      for(var i=0; i<voli.length; i++) {
        
        if(voli[i].status == check) {  
          $('.tab').append("<tr>" +
                              "<td>" + voli[i].airline + "</td>" +
                              "<td>" + voli[i].flight + "</td>" +
                              "<td>" + voli[i].destination + "</td>" +
                              "<td>" + voli[i].departure_time + "</td>" +
                              "<td " + setColor(voli[i].status) + "</td>" +
                              "<td>" + voli[i].gate + "</td>" +
                          "</tr>");
        }
      }  
    });
  });
  
  function setColor(a) {
    if(a == "scheduled") {
      a = "class=\"scheduled\">" + a;
      return a;
    } else if(a == "delayed") {
      a = "class=\"delayed\">" + a;
      return a;
    } else if(a == "cancelled") {
      a = "class=\"cancelled\">" + a;
      return a;
    } else if(a == "boarding") {
      a = "class=\"boarding\">" + a;
      return a;
    }
  }
  
});
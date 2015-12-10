/* your code should go here */

$(document).ready(function(){

  var model = {
    pos: 0,
    
    minTemp: function(day) {
      var pos = this.pos;
      var tmp = data[pos].temperature;
      var currentDay = day;
      for(var i=pos; i<(pos+4); i++) {
        if(((data[i].temperature < tmp)) && (data[i].day==currentDay)) {
          tmp = data[i].temperature;
        }
      }
      return tmp;
    },
    
    maxTemp: function(day) {
      var pos = this.pos;
      var tmp = data[pos].temperature;
      var currentDay = day;
      for(var i=pos; i<(pos+4); i++) {
        if(((data[i].temperature > tmp)) && (data[i].day==currentDay)) {
          tmp = data[i].temperature;
        }
      }
      return tmp;
    }
  };
  
  var octopus = {
    init: function() {
      viewMeteo.init();
    },
    
    incrementPos: function() {
      model.pos += 4;
    },
    
    getPos: function() {
      return model.pos;
    },
    
    getTempMin: function(day) {
      return model.minTemp(day);
    },
    
    getTempMax: function(day) {
      return model.maxTemp(day);
    }
    
  };
  
  var viewMeteo = {
    init: function() {
      this.meteo = $('#summary');
      this.render();
    },
    
    render: function() {
      var pos;
      for(var i=0; i<data.length; i++) {
        pos = octopus.getPos();
        if(pos == data.length) {
          break;
        }
        day = data[pos].day;
        this.meteo.append('<li>' +
                            '<div class="icon">' +
                              '<img src="img/icons/'+ data[pos].condition + '.png">' +      
                            '</div>' +
                            '<div class="stats">' +  
                              '<h2>' + day + '</h2>' +
                              '<strong>min</strong> ' + octopus.getTempMin(day) + ' ' +
                              '<strong>max</strong> ' + octopus.getTempMax(day) +   
                            '</div>' + 
                          '</li>');
        octopus.incrementPos();
      }
      
    }
  };
  
  octopus.init();
});
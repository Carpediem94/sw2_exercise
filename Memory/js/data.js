/* Don't modify this file */

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// Receives the number of elements to 
// include in the game. 
// Returns an array with the cards to include
// in the game
function generateData(num){
  var list = Array(num);
  for (var i=0; i < num ; i++){
    list[i] = i +1;
  }  
  return shuffle(list);  
}

var data = generateData(10);

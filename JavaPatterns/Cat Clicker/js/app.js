var cats = [
  {
    name: 'Kitty',
    path: 'img/cat1.jpg',
    count: 1,
  },
  {
    name: 'Fluffy',
    path: 'img/cat2.jpg',
    count: 1,
  },
  {
    name: 'Tom',
    path: 'img/cat3.jpg',
    count: 1,
  },
  {
    name: 'Kiwi',
    path: 'img/cat4.jpg',
    count: 1,
  },
  {
    name: 'Olly',
    path: 'img/cat5.jpg',
    count: 1,
  }
];

var cat_id;

$(document).ready(function() {
  
  for (var i=0; i<cats.length; i++) {
    $('#catlist').append('<td><button value="'+ cats[i].name +'">' + cats[i].name + '</button></td>');
    
    var cat = cats[i];
    var elem = document.createElement('div');
    var img = document.createElement('img');
    
    elem.setAttribute('id', cat.name);
    elem.setAttribute('class', 'gatto');
    
    img.setAttribute('src', cat.path);
    img.setAttribute('width', '50%');
    
    img.addEventListener('click', (function(name, j) {
      return function() {
        $('#count-' + name).remove();
        $('#' + name).append('<div id="count-' + name + '"><h1>' + name + ': ' + (j++) + '</h1></div>');
      };
    }(cat.name, cat.count)));
    
    elem.appendChild(img);
    
    document.getElementById('gatti').appendChild(elem);
    $('#' + cat.name).hide();
  }
  
  $('button').click(function() {
    $('.gatto').hide();
    cat_id = $(this).val();
    $('#' + cat_id).show();
  });
  
});







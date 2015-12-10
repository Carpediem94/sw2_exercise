$(function() {
  
var model = {
  currentCat: null,
  cats: [
    {
      name: 'Kitty',
      path: 'img/cat1.jpg',
      count: 0,
    },
    {
      name: 'Fluffy',
      path: 'img/cat2.jpg',
      count: 0,
    },
    {
      name: 'Tom',
      path: 'img/cat3.jpg',
      count: 0,
    },
    {
      name: 'Kiwi',
      path: 'img/cat4.jpg',
      count: 0,
    },
    {
      name: 'Olly',
      path: 'img/cat5.jpg',
      count: 0,
    }
  ]
};

var octopus = {
  
  //mostra la lista dei gatti
  init: function() {
    //inizializzo il primo gatto come il primo 
    model.currentCat = model.cats[0];
    //visualizza la lista di gatti
    viewCatList.init();
    //visulizza il primo gatto
    viewCat.init();
  },
  
  //ritorna il gatto selezionato
  getCat: function() {
    return model.currentCat;
  },
  
  //setta il gatto come selzionato
  setCat: function(cat) {
    model.currentCat = cat;
  },
  
  clickCat: function() {
    //incremento la variabile count
    //var cat = model.currentCat;
    model.currentCat.count++;
    //mostro a video il cambiamento
    viewCat.showCat();
  }
  
};
  
var viewCatList = {
  init: function() {
    //inizializza l'id cat-list
    this.catList = document.getElementById('cat-list');
    //chiama la funzione per la visualizzazione della lista a cui passo il div
    this.render();
  },
  
  render: function() {
    //inizializza la lista di gatti
    var cats = model.cats;
    
    //lista di gatti
    for (var i=0; i<cats.length; i++) {
      var cat = cats[i];
      var td = document.createElement('td');
      var btn = document.createElement('button');
      btn.textContent = cat.name;
      
      //seleziona gatto
      btn.addEventListener('click', (function(cat) {
        return function() {
          octopus.setCat(cat);
          viewCat.showCat();
        };
      })(cat));
      
      //aggiungi il button al td
      td.appendChild(btn);
      //aggiungi il td a cat-list
      this.catList.appendChild(td);
    }
  }
};
  
var viewCat = {
  //inizializzo i vari tag 
  init: function() {  
    this.name = document.getElementById('cat-name');
    this.img = document.getElementById('cat-img');
    this.count = document.getElementById('cat-count');
    
    //aggiungo la funzione clickCat all'immagine
    this.img.addEventListener('click', function(e) {
      octopus.clickCat();
    });
    
    //chiamo la visualizzazione del gatto
    this.showCat();
  },
  
  //visualizzo il gatto
  showCat: function() {
    //ritorno il gatto selezionato
    var cat = octopus.getCat();
    this.name.textContent = cat.name;
    this.count.textContent = cat.count;
    this.img.src = cat.path;
    this.img.setAttribute('width', '50%');
  }
};
  
octopus.init();  
});
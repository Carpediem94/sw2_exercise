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
    viewForm.init();
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
    model.currentCat.count++;
    //mostro a video il cambiamento
    viewCat.showCat();
  },
  
  //setta i nuovi valori del gatto
  setProperty: function(name, url, count) {
    model.currentCat.name = name;
    model.currentCat.path = url;
    model.currentCat.count = count;  
    //quindi mostra a video i parametri aggiornati
    viewCatList.init();
    viewCat.showCat();
  },
  
  //nasconde il form e passa i valori alla setProperty
  saveForm: function(name, url, count) {
    if(isNaN(count)) {
      alert("Insert a integer!");
    } else {
      $('#mod').hide();
      octopus.setProperty(name, url, count);    
    }
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
    //svuota il contenuto della cat-lis in modo da poterla aggiornare ogni volta
    $('#cat-list').empty();
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

var viewForm = {
  init: function() {
    $('#mod').hide();
    this.admin = document.getElementById('admin');
    
    admin.addEventListener('click', function() {
      viewForm.render();
    });
  },
  
  render: function() {
    $('#mod').show();
    var cat = octopus.getCat();
    var name = $('input[name="name"]');
    var url = $('input[name="url"]');
    var count = $('input[name="count"]');
    
    //ritorno i valori del gatto 
    name.val(cat.name);
    url.val(cat.path);
    count.val(cat.count);
    
    //button save
    $('input[name="save"]').on('click', function(e) {
      e.preventDefault();
      //passo i valori settati da me
      octopus.saveForm(name.val(), url.val(), count.val());
    });
    
    //button cancel
    $('input[name="cancel"]').on('click', function(e) {
      e.preventDefault();
      $('#mod').hide();
    });
  }
};
  
octopus.init();  
});


matcherModel = {
  init: function( size ) {
    
  },
    
}


matcherView = {

  init: function(  ) {
    
  },
    

  updateGameView: function(  ) {
    
  },

  addClickHandlers: function(  ) {
    
  },
    
    
};


matcherController = {

  view: matcherView,
  model: matcherModel,


  init: function( size ) {
    this.model.init(size);
    this.view.init();
    this.view.addClickHandlers();
  },

};


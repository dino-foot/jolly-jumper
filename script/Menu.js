var menuState = function(game){
    this.buttons = null;
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
         
            this.buttons = new menuButtons(game);
            this.buttons.create();
        }
        
    }
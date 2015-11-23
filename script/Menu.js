var menuState = function(game){
    this.buttons = null;
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
         
            game.global.menuBgSound = this.game.add.audio('menuBg',1,true);
            game.global.menuBgSound.play(); // replay from Button.js
            
            this.buttons = new menuButtons(game);
            this.buttons.create();
        }
        
    }
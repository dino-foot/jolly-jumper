var menuState = function(game){
    this.buttons = null;
    this.titleBg = null;
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
            
            this.titleBg = game.add.sprite(game.world.centerX,game.world.centerY,'title-bg');
            this.titleBg.anchor.setTo(0.5,0.5);
            this.titleBg.scale.setTo(0.6,0.6);
            game.global.menuBgSound = this.game.add.audio('menuBg',1,true);
            game.global.menuBgSound.play(); // replay from Button.js
            
            this.buttons = new menuButtons(game);
            this.buttons.create();
        }
        
    }
var helpState = function(game){
    // how to play state
    
};


    helpState.prototype = {
        
        create: function(){
            // console.log(game.state.getCurrentState());
            game.global.menuBgSound.stop();
            
            this.howtoplay = this.add.sprite(this.world.centerX,this.world.centerY,'how-to-play');
            this.howtoplay.anchor.setTo(0.5);
            
                            
    this.backBtn = game.add.button(this.world.centerX+120,game.height-60,'backward',function(){
this.game.state.start('Menu');
},this);
        this.backBtn.anchor.setTo(0.4,0.4);
        this.backBtn.input.useHandCursor = true;
            
        },
        
        update: function(){
            
        }
        
    }
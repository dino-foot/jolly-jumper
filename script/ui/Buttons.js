var menuButtons = function(game){
  this.playbtn;  
  this.helpbtn;  
  this.creditbtn;    
};

    menuButtons.prototype = {
        
        create: function(){
            
this.playbtn = game.add.button(game.world.centerX,game.world.centerY,'play',this.handlePlay,this,2,1,0);
        this.playbtn.anchor.setTo(0.5,0.5);
        
this.helpbtn = game.add.button(game.world.centerX,game.world.centerY+60,'help',this.handleHelp,this,2,1,0);
            this.helpbtn.anchor.setTo(0.5,0.5);
            
this.creditbtn = game.add.button(game.world.centerX,game.world.centerY+120,'credit',this.handleCredit,this,2,1,0);
            this.creditbtn.anchor.setTo(0.5,0.5);
            
        },
        
        handlePlay: function(){
            // run the play (core) state
            game.state.start('Play');
        },
        
        handleHelp: function(){
            
        },
        
        handleCredit: function(){
            
        }
    }
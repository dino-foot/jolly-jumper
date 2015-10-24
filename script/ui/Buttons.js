var menuButtons = function(game){
  this.playbtn;  
   
};

    menuButtons.prototype = {
        
        create: function(){
            
this.playbtn = game.add.button(game.world.centerX,game.world.centerY,'play',this.handlePlay,this);
        this.playbtn.anchor.setTo(0.5,0.5);    
        
        this.helpbtn = game.add.button(175,game.height-60,'howtoplay',this.handleHelp,this);
        this.helpbtn.anchor.setTo(0.5,0.5);
            
        this.settingbtn = game.add.button(50,game.height-60,'setting',this.handleSetting,this);
        this.settingbtn.anchor.setTo(0.5,0.5);
            
        this.creditbtn = game.add.button(300,game.height-60,'credit',this.handleCredit,this);
        this.creditbtn.anchor.setTo(0.5,0.5);    
            
        },
        
        handlePlay: function(){
            // run the play (core) state
            game.global.menuBgSound.pause();
            game.state.start('Play');
        },
        
        handleHelp: function(){
            
        },
        
        handleSetting: function(){
            
        },
        
        handleCredit: function(){
            
        }
    }
var loadState = function(game){
    
};

  loadState.prototype = {
      
      preload: function(){
          console.log(game.state.getCurrentState());
          
          // load all objcet 
          this.load.image('background','assets/bg3.png');
          this.load.image('cactus','assets/cactus.png');
          
          this.load.image('platform2','assets/platform2.png');
          
          //load fruties
          
          // load utility
          
          // load player
          this.load.spritesheet('jolly','assets/player/jolly.png',95,144);
          
          // load buttons
          this.load.spritesheet('play','assets/play.png',124,50);
          this.load.spritesheet('help','assets/help.png',124,50);
          this.load.spritesheet('credit','assets/credit.png',124,50);
      },
      
      create: function(){
          
          this.state.start('Menu');
      }
      
  }
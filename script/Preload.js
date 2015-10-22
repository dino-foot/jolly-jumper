var loadState = function(game){
    
};

  loadState.prototype = {
      
      preload: function(){
          console.log(game.state.getCurrentState());
          
          // load all objcet 
          this.load.image('background','assets/bg.png');
          this.load.image('cactus','assets/cactus.png');
          
         // this.load.image('platform2','assets/broken.png');
          this.load.image('platform','assets/platform.png');
          
          //load fruties
          this.load.image('fruit0','assets/fruits/banana_01.png');
          this.load.image('fruit1','assets/fruits/grape.png');
          this.load.image('fruit2','assets/fruits/pineapple.png');
          this.load.image('fruit3','assets/fruits/watermelon.png');
          this.load.image('fruit4','assets/fruits/cherry.png');
          // load utility
          
          // load player
           this.load.spritesheet('jolly','assets/player/monkey.png',63,78);
          
          // load buttons
          this.load.spritesheet('play','assets/play.png',124,50);
          this.load.spritesheet('help','assets/help.png',124,50);
          this.load.spritesheet('credit','assets/credit.png',124,50);
          
          // sounds
          this.load.audio('fruitGulp',['sounds/fruitGulp.mp3','sounds/fruitGulp.ogg'],true);
      },
      
      create: function(){
          
          this.state.start('Menu');
      }
      
  }
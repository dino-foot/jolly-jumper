var loadState = function(game){
    
};

  loadState.prototype = {
      
      preload: function(){
          console.log(game.state.getCurrentState());
          
          // load all objcet 
          this.load.image('background','assets/bg.png');
          this.load.image('cactus','assets/cactus.png');
          this.load.image('coconut','assets/coconut.png');
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
           this.load.image('play','assets/GUI/play.png');    
           this.load.image('setting','assets/GUI/setting.png');    
           this.load.image('credit','assets/GUI/credit.png');    
           this.load.image('howtoplay','assets/GUI/howToPlay.png');    
           this.load.spritesheet('sound','assets/GUI/sound.png',70,60); 
           this.load.spritesheet('music','assets/GUI/music.png',70,85); 
          
          
          // sounds
          this.load.audio('fruitGulp',['sounds/fruitGulp.mp3','sounds/fruitGulp.ogg'],true);
          this.load.audio('menuBg',['sounds/menuBg.mp3','sounds/menuBgs.ogg'],true);
      },
      
      create: function(){
          
          this.state.start('Menu');
      }
      
  }
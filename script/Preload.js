var loadState = function(game){
    
};

  loadState.prototype = {
      
      preload: function(){
          console.log(game.state.getCurrentState());

          var Font = "40px Comic Sans MS";
            this.loadText = this.add.text(this.world.centerX,this.world.centerY,'loading ',{font: Font, fill: '#99CC0E', stroke: '#55B50D', strokeThickness: 3});
          this.loadText.anchor.setTo(0.5,0.5);
          
          /*
          this.loadingBg = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbg');
          this.loadingBg.anchor.setTo(0.5,0.5);
          this.loadingBg.scale.setTo(0.5,0.5);
          
          this.loadingBar = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbar');
          this.loadingBar.anchor.setTo(0.5,0.5);
          this.loadingBar.scale.setTo(0.5,1);
          this.load.setPreloadSprite(this.loadingBar);
          this.loadingBar.x = this.world.centerX - this.loadingBar.width/2;
          */
          
          // load all objcet 
          this.load.image('background','assets/bg.png');
          this.load.image('cactus','assets/cactus.png');
          this.load.image('platform','assets/platform.png');
          
          //load fruties
          this.load.image('fruit0','assets/fruits/banana_01.png');
          this.load.image('fruit1','assets/fruits/grape.png');
          this.load.image('fruit2','assets/fruits/pineapple.png');
          this.load.image('fruit3','assets/fruits/watermelon.png');
          this.load.image('fruit4','assets/fruits/cherry.png');
          // load utility
          this.load.spritesheet('gems','assets/gems-sprite.png',45,42);
          // load player
           this.load.spritesheet('jolly','assets/player/monkey.png',63,78);
          
          // load GUI
           this.load.image('play','assets/GUI/play.png');    
           this.load.image('setting','assets/GUI/setting.png');    
           this.load.image('credit','assets/GUI/credit.png');    
           this.load.image('howtoplay','assets/GUI/howToPlay.png');      
           this.load.spritesheet('sound','assets/GUI/sound.png',70,60); 
           this.load.spritesheet('music','assets/GUI/music.png',70,85); 
            this.load.image('life','assets/GUI/life.png'); // Play.js
            this.load.image('stone','assets/stone.png'); // fruit.js
            this.load.image('coconut','assets/coconut.png'); // fruit.js
          
          // sounds
          this.load.audio('fruitGulp',['sounds/fruitGulp.mp3','sounds/fruitGulp.ogg'],true);
          this.load.audio('menuBg',['sounds/menuBg.mp3','sounds/menuBgs.ogg'],true);
      },
      
      create: function(){
          
          //if(this.game.cache.isSoundReady('menuBg')){
			this.state.start('Menu');
		  //}
      },
      
      loadUpdate: function(){
        this.loadText.text = 'loading '+this.load.progress+'%';
          //console.log(this.load.progress);
      },
      
      update: function(){
            
      }
      
      
  }
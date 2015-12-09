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
          this.load.spritesheet('gems','assets/gems-sprite.png',45,42); // fruit.js && play.js
          // load player
           this.load.spritesheet('jolly','assets/player/monkey.png',63,78);
          
          // load GUI
           this.load.image('play','assets/GUI/play.png');    
           this.load.image('setting','assets/GUI/setting.png');    
           this.load.image('credit','assets/GUI/credit.png');    
           this.load.image('howtoplay','assets/GUI/howToPlay.png');      
           this.load.spritesheet('sound-sprite','assets/GUI/sound.png',70,60); 
           this.load.image('title-bg','assets/GUI/title_bg.png');
           this.load.image('menu-title','assets/GUI/menu-title.png');
           this.load.image('pauseBtn','assets/GUI/pause.png');  // Play.js
           this.load.image('restartBtn','assets/GUI/restart.png');  // leaderboard.js
           this.load.image('menuBtn','assets/GUI/b_More.png');  // leaderboard.js
           this.load.image('backward','assets/GUI/backward.png');// credit.js
           this.load.image('resumeBtn','assets/GUI/resume.png'); // Play.js
           this.load.image('life','assets/GUI/life.png'); // Play.js
           this.load.image('coconut','assets/coconut.png'); // fruit.js
           
          //credit
          this.load.image('social-link','assets/credit/credit-social-link.png');
          this.load.image('code','assets/credit/code.png');
          this.load.image('devcredit','assets/credit/devcredit.png');
          this.load.image('shohan','assets/credit/shohan.png');
          
          // how to play
          this.load.image('how-to-play','assets/how-to-play.png');
          
          // sounds
          this.load.audio('fruitGulp',['sounds/fruitGulp.wav','sounds/fruitGulp.ogg','sounds/fruitGulp.mp3','sounds/fruitGulp.m4a'],true);
          this.load.audio('menuBg',['sounds/menuBg.ogg','sounds/menuBg.wav','sounds/menuBg.mp3','sounds/menuBg.m4a'],true);
          
          this.load.audio('jumpSound',['sounds/jump.wav','sounds/jump.ogg','sounds/jump.mp3','sounds/jump.m4a'],true);

          this.load.audio('gemSound',['sounds/gemSound.mp3','sounds/gemSound.wav','sounds/gemSound.ogg','sounds/gemSound.m4a'],true);
          
          this.load.audio('deadSound',['sounds/dead.mp3','sounds/dead.wav','sounds/dead.ogg','sounds/dead.m4a'],true);
          
          this.load.audio('cocoSound',['sounds/dap.mp3','sounds/dap.wav','sounds/dap.ogg','sounds/dap.m4a'],true);
          
          
      },
      
      create: function(){
            
          this.sound.setDecodedCallback([ 'gemSound', 'menuBg', 'jumpSound','deadSound' ], function(){
                console.log('sounds are ready');
                this.state.start('Menu');
          }, this);
      },
      
      loadUpdate: function(){
        this.loadText.text = 'loading '+this.load.progress+'%';
          //console.log(this.load.progress);
      },
      
      update: function(){
            
      }
      
      
  }
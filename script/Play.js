// Main game control script

var playState = function(game){
    this.game = game;
    this.background = null;
    this.hidden = null;
    this.platforms = null;
    this.lifeGroup = null;
    this.life1;
    this.life2;
    this.life3; 
    this.lifeptr = 0; // life sprite handler 
};

    playState.prototype = {

        create: function(){
            console.log(game.state.getCurrentState());
            //this.game.add.plugin(Phaser.Plugin.Debug); // debug plugin
            
            this.physics.startSystem(Phaser.Physics.ARCADE);
            game.global.jumpSound = this.game.add.audio('jumpSound',1,false);
            game.global.gemSound = this.game.add.audio('gemSound',1,false);
            game.global.deadSound = this.game.add.audio('deadSound',1,false);
            
          this.background = new background(game);
          this.background.create(); 
            
          this.platforms = new platform(game);
          this.platforms.create();
          this.platforms.initialPlatforms();

          this.jolly = new player(game);
          this.jolly.create();

          this.fruits = new fruits(game);
          this.fruits.create();
          this.fruits.initialFruits();
                     
          this.lifeGroup = this.add.group();
          this.lifeGroup.fixedToCamera = true;       
          
         this.life1 = this.add.sprite(game.width-50,5,'life');
         this.life2 = this.add.sprite(game.width-90,5,'life');
         this.life3 = this.add.sprite(game.width-130,5,'life');
            
            this.lifeGroup.add(this.life1);
            this.lifeGroup.add(this.life2);
            this.lifeGroup.add(this.life3);     
          
            // scoring system
          this.gameScore = new Score(game); 
          this.gameScore.create();

        },
         
        update: function(){
            this.jolly.update();
            this.physics.arcade.collide(this.jolly.player,this.background.cactus,this.playerDead,null,this);
            this.physics.arcade.collide(this.jolly.player,this.platforms.pltGroup,this.playerVsPlatform,null,this);
            this.jolly.handleMovement();

            this.platforms.update();

            // handle fruits
            this.fruits.update();
            
            game.global.collideFlag = false; // // checking variable for score tweening.
    this.physics.arcade.overlap(this.jolly.player,this.fruits.fruitsGroup,this.playerVsFruits,null,this);
            
            // handle score
           // this.gameScore.update();
                       this.physics.arcade.collide(this.platforms.pltGroup,this.fruits.gemsGroup,this.gemsVsPlatform,null,this); // collide with gems
            this.physics.arcade.overlap(this.jolly.player,this.fruits.gemsGroup,this.gemsVsPlayer,null,this); // gems collide with player
            this.physics.arcade.collide(this.jolly.player,this.fruits.coconutGroup,this.coconutVsPlayer,null,this); // coconut collide with player
            
            // game over if 3 life used
            if(this.lifeptr==3){
                this.gameOver();
            }
            
           // this.gameScore.update();
        }, 
        
        playerVsFruits: function(player,fruit){
            fruit.kill();
            this.fruits.fruitSound.play();
            game.global.collideFlag = true;
            game.global.score +=2;
            this.gameScore.update();
            //var score = game.global.score;
            
            //console.log('score: '+game.global.score);
        },
        
        playerVsPlatform: function(){
            game.global.jumpSound.play();
            this.jolly.player.body.velocity.y -= this.rnd.integerInRange(480,600);
            
        },
        
        gemsVsPlatform: function(){
            var gem = this.fruits.gemsGroup.getFirstExists(true);
            gem.body.friction = 1;
            gem.body.velocity.x = this.rnd.integerInRange(-20,20);
          //  gem.body.velocity.y = 50;
        },
        
        gemsVsPlayer: function(player,gems){
            // a sound should play here
            game.global.gemSound.play();
            gems.kill();
            game.global.score +=5;
            game.global.collideFlag = true;
            this.gameScore.update();
        },
        
        coconutVsPlayer: function(player,coconut){
            var life = this.lifeGroup.getFirstExists(true);
            if(life){
                life.kill();
            }
            coconut.body.velocity.x = 400;
            coconut.body.velocity.y = -300;
        },
        
         gameOver: function(){
            this.world.setBounds(0,0,this.game.width,this.game.height);
            this.platforms.pltGroup.destroy(true,false);
            this.background.bg.kill();
            this.background.cactus.kill();
            this.lifeptr = 0;
            
            this.state.start('Menu');
        },
        
        playerDead: function(){
            this.jolly.player.kill();
            game.global.deadSound.play();
            
            game.global.deadSound.onStop.add(function(){
               console.log('sound completed');
                this.gameOver();
                // take player name input & show highscore along with player score
            },this);
        },
        
        render: function(){
              //this.jolly.render();
              //this.platforms.render();
              //this.background.render();

               // this.fruits.render();
             // this.game.debug.cameraInfo(this.camera,32,100,'#2d2d2d');   
        }

    }

             
   

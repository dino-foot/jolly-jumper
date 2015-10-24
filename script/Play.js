// Main game control script

var playState = function(game){
    this.background = null;
    this.hidden = null;
    this.platforms = null;
};

    playState.prototype = {

        create: function(){
            console.log(game.state.getCurrentState());
            //this.game.add.plugin(Phaser.Plugin.Debug); // debug plugin
            
            this.physics.startSystem(Phaser.Physics.ARCADE);
            
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
          
            // scoring system
          this.gameScore = new Score(game); 
          this.gameScore.create();

        },

        update: function(){
            this.jolly.update();
            this.physics.arcade.collide(this.jolly.player,this.background.cactus,this.gameOver,null,this);
            this.physics.arcade.collide(this.jolly.player,this.platforms.pltGroup,this.playerVsPlatform,null,this);
            this.jolly.handleMovement();

            this.platforms.update();

            // handle fruits
            this.fruits.update();
            
            game.global.collideFlag = false;
    this.physics.arcade.overlap(this.jolly.player,this.fruits.fruitsGroup,this.playerVsFruits,null,this);
            
            // handle score
            this.gameScore.update();
            
        }, 
        
        playerVsFruits: function(player,fruit){
            fruit.kill();
            this.fruits.fruitSound.play();
            game.global.collideFlag = true;
            game.global.score +=2;
            //var score = game.global.score;
            
            //console.log('score: '+game.global.score);
        },
        
        playerVsPlatform: function(){
            this.jolly.player.body.velocity.y -= this.rnd.integerInRange(500,650);
            
        },

         gameOver: function(){
            this.world.setBounds(0,0,this.game.width,this.game.height);
            this.platforms.pltGroup.destroy(true,false);
            this.jolly.player.kill();
            this.background.bg.kill();
            this.background.cactus.kill();

            this.state.start('Menu');
        },

        render: function(){
              //this.jolly.render();
              //this.platforms.render();
              //this.background.render();

               // this.fruits.render();
            //  this.game.debug.cameraInfo(this.camera,32,160,'#2d2d2d');
             // this.fruits.render();    
            //  this.game.debug.cameraInfo(this.camera,32,160,'#2d2d2d');   
        }

    }

             
   

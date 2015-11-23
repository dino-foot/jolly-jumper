// Main game control script

var playState = function(game){
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
            this.physics.arcade.collide(this.jolly.player,this.background.cactus,this.gameOver,null,this);
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
            gems.kill();
            game.global.score +=10;
            game.global.collideFlag = true;
            this.gameScore.update();
        },
              
         gameOver: function(){
            this.world.setBounds(0,0,this.game.width,this.game.height);
            this.platforms.pltGroup.destroy(true,false);
            this.jolly.player.kill();
            this.background.bg.kill();
            this.background.cactus.kill();
            this.lifeptr = 0;
                
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

             
   

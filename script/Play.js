var playState = function(game){
    this.background = null;
    this.hidden = null;
};

    playState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
           // this.game.add.plugin(Phaser.Plugin.Debug); // debug plugin
            
            this.physics.startSystem(Phaser.Physics.ARCADE);
            
          this.background = new background(game);    
          this.background.create();  
            
          this.platforms = new platform(game);
          this.platforms.create();    
          this.platforms.randomPlatform();      
             
          this.jolly = new player(game);
          this.jolly.create();
          this.camera.unfollow();
        },

        update: function(){
            this.jolly.update();
            this.physics.arcade.collide(this.jolly.player,this.background.cactus,this.gameOver,null,this);
            this.physics.arcade.collide(this.jolly.player,this.platforms.pltGroup);
            this.jolly.handleMovement();
                         
            this.platforms.update();    
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
             // this.jolly.render();
            //  this.platforms.render();
              //this.background.render();   
              //this.game.debug.cameraInfo(this.camera,32,250,'#2d2d2d');    
        }   
        
    }
   
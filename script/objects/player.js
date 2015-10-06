var player = function(game){
    this.game = game;
    this.player;
    this.cursor;
    this.jumpButton;
};

    player.prototype = {
        
        create: function(){ 
            this.player = game.add.sprite(game.world.centerX,game.world.centerY,'jolly',0);
            this.player.anchor.setTo(0.5,0.5);
            game.physics.arcade.enable(this.player);
            this.player.body.setSize(42,110,0,2);
            this.player.body.collideWorldBounds = true;
            this.player.body.gravity.set(0,400);     
            
            this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.cursor = game.input.keyboard.createCursorKeys();
            
            this.yOrig = this.player.y;
            this.yChange = 0;
            this.cameraYMin = 99999;
        },
        
        update: function(){
            
            game.world.setBounds(0,-this.yChange,game.world.width,game.height+this.yChange);
            this.cameraYMin = Math.min(this.cameraYMin,this.player.y-game.height+300);
            game.camera.y -= 1;
            //game.camera.y = this.cameraYMin;
           // console.log('y :'+this.cameraYMin);
        },
        
        handleMovement: function(){
            var standing  = this.player.body.touching.down || this.player.body.blocked.down;
            
            if(this.jumpButton.isDown && standing==true){
                this.player.body.velocity.y = -380;
            }
            else if(this.cursor.left.isDown){
                this.player.body.velocity.x = -100;
            }
            else if(this.cursor.right.isDown){
                this.player.body.velocity.x = 100;
            }
            else{
                this.player.body.velocity.x = 0;
            }
            
            if(standing == false)
                this.player.frame = 1;
            else 
              this.player.frame = 0;  
            
            // track the maximum amount that hero has traveled
            var t1 = Math.abs(this.player.y);     
            this.yChange = Math.max(Math.abs(t1+this.yOrig)+2000);
            //console.log('p :'+this.player.y);
            
        },
        
        render: function(){
            game.debug.bodyInfo(this.player,32,32);
            game.debug.body(this.player);
        }
    } 
var platform = function(game){
    this.pltGroup = null;
    //this.pltYMin = 99999;
    game.global.pltYMin = 99999;
};



    platform.prototype = {
        create: function(){
           this.pltGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);
           this.pltGroup.createMultiple(6,'platform',null,false); // false - dead
           
           this.pltGroup.setAll('body.immovable',true);
           this.pltGroup.setAll('body.checkCollision.down',false); 
           this.pltGroup.setAll('body.checkCollision.left',false);
           this.pltGroup.setAll('body.checkCollision.right',false);
           this.pltGroup.callAll('body.setSize','body',86,25,5,0);
        },
            
        initialPlatforms: function(){
            var platform;
            for(var i=1;i<=5;i++){
                platform = this.pltGroup.getFirstDead();
                platform.body.immovable = true;
                platform.anchor.setTo(0.5,0.5);
                platform.reset(60*i,120*i);
            }
        },
        
        handlePlatform: function(elem){
            game.global.pltYMin  = Math.min(game.global.pltYMin ,elem.y);
            
            if(elem.y>game.camera.y+game.height){
                elem.kill();
                this.platformCreate();
            }
        },
        
        platformCreate: function(){
         
            var platform = this.pltGroup.getFirstDead();
            platform.body.immovable = true; 
            platform.anchor.setTo(0.5,0.5);  
            var x = game.rnd.integerInRange(50,300);
            var y = game.global.pltYMin - (game.rnd.integerInRange(100,180));
            platform.reset(x,y);
            return;  
        },
        
        update: function(){
           this.pltGroup.forEachAlive(this.handlePlatform,this);
        },
        
        render: function(){
               game.debug.text('alive '+this.pltGroup.countLiving()+' dead '+this.pltGroup.countDead(),32,160);    
              
            game.debug.text(game.global.pltYMin ,32,180);        
        }
        
    }
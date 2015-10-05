var platform = function(game){
    this.pltGroup = null;
    this.pltYMin = 99999;
};

    platform.prototype = {
        create: function(){
           this.pltGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);
           this.pltGroup.createMultiple(6,'platform2',null,false); // false - dead
           
           this.pltGroup.setAll('anchor.setTo',0.5);
           this.pltGroup.setAll('body.immovable',true);
           this.pltGroup.setAll('body.checkCollision.down',false); 
           this.pltGroup.setAll('body.checkCollision.left',false);
           this.pltGroup.setAll('body.checkCollision.right',false);
           this.pltGroup.callAll('body.setSize','body',110,20,20,-5); 
        },
        
        randomPlatform: function(){
           for(var i=0;i<=this.pltGroup.countDead();i++){
               var plt = this.pltGroup.getFirstDead();
               plt.reset(50*i,180*i);
           }
        },
        
        handlePlatform: function(elem){
            this.pltYMin = Math.min(this.pltYMin,elem.y);
            //console.log('platform: '+this.pltYMin);
            //console.log('elem: '+elem.y);
            
            if(elem.y>game.camera.y+game.height){
                elem.kill();
                this.platformCreate();
            }
        },
        
        platformCreate: function(){
            var platform = this.pltGroup.getFirstDead();
            var x = game.rnd.integerInRange(-40,game.world.width-90);
            var y = this.pltYMin-(game.rnd.integerInRange(180,200));
            platform.reset(x,y);
            platform.body.immovable = true;
            return;
        },
        
        update: function(){
           this.pltGroup.forEachAlive(this.handlePlatform,this);
        },
        
        render: function(){
              //console.log('alive '+this.pltGroup.countLiving()+' dead '+this.pltGroup.countDead());
        }
        
    }
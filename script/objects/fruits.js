var fruits = function(game){
    
};


    fruits.prototype = {
        
        create: function(){
            //var imageArray = game.cache.getKeys(Phaser.Cache.IMAGE);
            var fruitsArray = new Array('fruit0','fruit1','fruit2','fruit3','fruit4');
            this.fruitsGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);
            
            this.fruitsGroup.createMultiple(5,'fruit0',null,false);
            this.fruitsGroup.createMultiple(5,'fruit1',null,false);
            this.fruitsGroup.createMultiple(5,'fruit2',null,false);
            this.fruitsGroup.createMultiple(5,'fruit3',null,false);
            this.fruitsGroup.createMultiple(5,'fruit4',null,false);
            
            this.fruitsGroup.setAll('anchor.setTo',0.5,0.5);
            this.fruitsGroup.setAll('body.immovable',true);
            
            
        },
            
        createFruits: function(){
            var num = game.rnd.integerInRange(15,25);
            //var fruit = this.fruitsGroup.getFirstDead();
            var fruit;
            
            for(var i=0;i<num;i++){
             fruit = this.fruitsGroup.getRandom(0,num);
             fruit.reset(game.world.randomX,game.world.randomY); // fix it
            }
            
        },
        
        killFruits: function(){
            
        },
        
        update: function(){
            // foreach call
            this.createFruits();
        },
        
        render: function(){
            game.debug.text('fruitGroup countDead : '+this.fruitsGroup.countDead(),32,400);
        }
    }
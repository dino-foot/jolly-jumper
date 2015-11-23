var fruits = function(game){
    this.game = game;
    this.fruitYMin = 99999;
    this.min = 0;
    this.max = 0;
    this.x = 0;
    this.y = 0;
    this.gemsLoopTime = 10000; // 10s
    this.gemsGroup = null;
};

/*
+Note : when you're calling a function of an object like anchor (which is a Point), or animation , or Sound or whatever, the context is always that actual object.
+rich [9:56 PM]
+if it's a direct function on a Sprite then it can be null (as it will be set to the sprite automatically)
+*/
    fruits.prototype = {

        create: function(){
            this.fruitYMin = 99999;
            
            var fruitsArray = new Array('fruit0','fruit1','fruit2','fruit3','fruit4');
            this.fruitsGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);

            // total = 15
            this.fruitsGroup.createMultiple(1,'fruit0',null,false);
            this.fruitsGroup.createMultiple(1,'fruit1',null,false);
            this.fruitsGroup.createMultiple(1,'fruit2',null,false);
            this.fruitsGroup.createMultiple(1,'fruit4',null,false);
            this.fruitsGroup.createMultiple(1,'fruit3',null,false);
            this.fruitsGroup.createMultiple(1,'fruit0',null,false);       
            this.fruitsGroup.createMultiple(1,'fruit2',null,false);
            this.fruitsGroup.createMultiple(2,'fruit1',null,false);
            this.fruitsGroup.createMultiple(1,'fruit3',null,false);
            this.fruitsGroup.createMultiple(2,'fruit2',null,false);
            this.fruitsGroup.createMultiple(1,'fruit4',null,false);
            this.fruitsGroup.createMultiple(1,'fruit3',null,false);
            this.fruitsGroup.createMultiple(1,'fruit4',null,false);
            
            this.fruitsGroup.callAll('anchor.setTo','anchor',0.5,0.5);
            this.fruitsGroup.setAll('body.immovable',true);
            this.fruitsGroup.callAll('body.setSize','body',25,25,0,2);
            
            this.fruitSound = game.add.audio('fruitGulp',1,false);
            
            Phaser.ArrayUtils.shuffle(this.fruitsGroup);
            this.fruitsGroup.updateZ();
            
            // gems handle
            this.gemsGroup = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            for(var i=0;i<=7;i++){
                this.gemsGroup.create(this.game.width/2,this.game.height/2,'gems',i,false);
            }
            
            this.gemsGroup.callAll('anchor.setTo','anchor',0.5,0.5);
           // this.gemsGroup.callAll('body.velocity.set','body.velocity',100,100);
            this.gemsGroup.callAll('body.setSize','body',38,40,5,2);
            this.gemsGroup.callAll('body.gravity.set','body.gravity',0,350);
            this.gemsGroup.callAll('body.bounce.set','body.bounce',0.6);
            Phaser.ArrayUtils.shuffle(this.gemsGroup);
            this.gemsGroup.updateZ();
            
            game.time.events.loop(this.gemsLoopTime,this.handleGems,this); // loop to infinity
            
        },
        
        initialFruits: function(){
           var fruit;
            for(var i=1;i<=15;i++){
                fruit = this.fruitsGroup.getRandom();
                var x = game.rnd.integerInRange(20,310);
                var y = game.rnd.integerInRange(20,400);
                fruit.reset(x+10,y+30);
            }
            
        },

        handleFruits: function(elem){
            if(elem.y>game.height+game.camera.y){
                elem.kill();
                this.fruitsGroup.forEachDead(this.createFruits,this);
            }

        },

        createFruits: function(elem){
            
            this.min = game.camera.y;
            this.max = game.camera.y+game.height;
            this.y = game.rnd.integerInRange(this.min,this.min-300);
            this.x = game.rnd.integerInRange(30,320);
                       
            Phaser.ArrayUtils.shuffle(this.fruitsGroup);
            this.fruitsGroup.updateZ();
            
            var tmp = this.fruitsGroup.getFirstDead();
            if(tmp){
                tmp.reset(this.x,this.y-20);
            }
            return;
        },
        
        handleGems: function(){
          for(var i=0;i<=7;i++){
                var gem = this.gemsGroup.getFirstDead();
                if(gem){
                this.y = game.rnd.integerInRange(this.min,this.min-500);
                this.x = game.rnd.integerInRange(30,320);
                gem.reset(this.x,this.y-20);
               // return;
            }
          }
        },
        
        killGems: function(gem){
            if(gem.y>game.height+game.camera.y){
                gem.kill();
            }
        },
        
        update: function(){
             this.fruitsGroup.forEachAlive(this.handleFruits,this);
             this.gemsGroup.forEachAlive(this.killGems,this);
        },

        render: function(){
            game.debug.text('fruitGroup countLiving : '+this.fruitsGroup.countLiving(),32,400);

        }
    }

var fruits = function(game){
    this.game = game;
    this.fruitYMin = 99999;
    this.min = 0;
    this.max = 0;
    this.x = 0;
    this.y = 0;
    this.gemsLoopTime = 10000; // 10s
    this.cocoLoopTime = 15000; // 15s
    this.gemsGroup = null;
    this.coconutGroup = null;
    this.levelRank = 'beginner'; // default value
    this.timer_01 = null;
    this.timer_02 = null;
    this.timer_03 = null;
    this.time1 = 10000; // time beg
    this.time2 = 10000; // time inter - 4min
    this.time3 = 10000; // time expert - 6min
    this.flag = 0;
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
            this.gemsGroup.callAll('body.gravity.set','body.gravity',0,330);
            this.gemsGroup.callAll('body.bounce.set','body.bounce',0.6);
            Phaser.ArrayUtils.shuffle(this.gemsGroup);
            this.gemsGroup.updateZ();
            
            this.coconutGroup = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
            this.coconutGroup.createMultiple(4,'coconut',false);
            this.coconutGroup.callAll('body.setSize','body',35,40,5,2);
            //this.coconutGroup.callAll('body.velocity.set','body.velocity',100,100);
            this.coconutGroup.callAll('body.gravity.set','body.gravity',0,300);
            this.coconutGroup.callAll('body.bounce.set','body.bounce',0.8);
            this.coconutGroup.setAll('body.friction','body',0.5);
            this.coconutGroup.setAll('body.mass','body',2);
            this.coconutGroup.setAll('body.checkCollision.left',false);
            this.coconutGroup.setAll('body.checkCollision.right',false);
            this.coconutGroup.setAll('body.checkCollision.up',false);
            
            game.time.events.loop(this.gemsLoopTime,this.handleGems,this); // loop to infinity
            //game.time.events.loop(this.cocoLoopTime,this.handleCoconuts,this); // loop to infinity
            
            // create timer for levelRank
            this.timer_01 = game.time.create(false);
            this.timer_02 = game.time.create(false);
            this.timer_03 = game.time.create(false);
            
            this.setTimer(); 
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
           var rand = game.rnd.integerInRange(1,7);
           // console.log(rand);
          for(var i=0;i<=rand;i++){
                var gem = this.gemsGroup.getFirstDead();
                if(gem){
                //this.y = game.rnd.integerInRange(this.min,this.min-500);
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);    
                this.x = game.rnd.integerInRange(30,320);
                gem.reset(this.x,y);
               // return;
            }
          }
        },
        
        killGems: function(gem){
            if(gem.y>game.height+game.camera.y){
                gem.kill();
            }
        },
        
        handleCoconuts: function(){
            var rand = game.rnd.integerInRange(0,3);
           // console.log(rand);
          for(var i=0;i<=rand;i++){
                var coco = this.coconutGroup.getFirstDead();
                if(coco){
                //this.y = game.rnd.integerInRange(this.min,this.min-600);
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(30,320);
                coco.reset(this.x,y);
               // return;
            }
          }
        },
        
        killCoconut: function(coco){
            if(coco.y>game.height+game.camera.y){
                coco.kill();
            }
        },
        
        setTimer: function(){
            this.timer_01.loop(this.time1,this.level_01,this);
            this.timer_02.loop(this.time2,this.level_02,this);
            this.timer_03.loop(this.time3,this.level_03,this);
            console.log('timer set'); 
            this.timer_01.start();
            //this.timer_02.start();
           // this.timer_03.start();
            console.log('timer started'); 
        },
        
        level_01: function(){
            //console.log('level 1 o'); 
            if(this.flag<=3){
                var coco = this.coconutGroup.getFirstDead();
                if(coco){
                //this.y = game.rnd.integerInRange(this.min,this.min-600);
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(30,320);
                coco.reset(this.x,y);
                this.flag = this.flag+1;
                console.log('level 1');     
            }
        }
            
        },
        
        level_02: function(){
            
              var rand = game.rnd.integerInRange(1,2);
              for(var i=0;i<=rand;i++){
                var coco = this.coconutGroup.getFirstDead();
                if(coco){
                //this.y = game.rnd.integerInRange(this.min,this.min-600);
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(30,320);
                coco.reset(this.x,y);
                this.flag = this.flag+1;
                console.log('level 2');  
            }
          }
            
        },
        
        level_03: function(){
            
            var rand = game.rnd.integerInRange(2,3);
              for(var i=0;i<=rand;i++){
                var coco = this.coconutGroup.getFirstDead();
                if(coco){
                //this.y = game.rnd.integerInRange(this.min,this.min-600);
                var y = game.world.bounds.y+game.rnd.integerInRange(1500,1800);
                this.x = game.rnd.integerInRange(30,320);
                coco.reset(this.x,y);
                this.flag = this.flag+1;
                console.log('level 3');  
            }
          }
        
            
        },
        
        handleDifficulty : function(flag){
            if(flag == 3){
                this.timer_01.stop();
               // console.log('timer 1 stopped');
                //console.log('timer 2 started');
                this.timer_02.start();
            }
            else if(flag >= 10){
                this.timer_02.stop();
                this.timer_03.start();
            }
            
        },
        
        update: function(){
             this.fruitsGroup.forEachAlive(this.handleFruits,this);
             this.gemsGroup.forEachAlive(this.killGems,this);
             this.coconutGroup.forEachAlive(this.killCoconut,this);
             
             this.handleDifficulty(this.flag); // manage time event   
        },

        render: function(){
            game.debug.text('fruitGroup countLiving : '+this.fruitsGroup.countLiving(),32,400);

        }
    }

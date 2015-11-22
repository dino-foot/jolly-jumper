var fruits = function(game){
    this.fruitYMin = 99999;
    this.coconutLoopTime = 7000; // 10s
};

/*
+Note : when you're calling a function of an object like anchor (which is a Point), or animation , or Sound or whatever, the context is always that actual object.
+rich [9:56 PM]
+if it's a direct function on a Sprite then it can be null (as it will be set to the sprite automatically)
+*/
    fruits.prototype = {

        create: function(){
            
             this.coconutGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);
             this.coconutGroup.createMultiple(4,'coconut',null,false);
             this.coconutGroup.callAll('body.setSize','body',35,35,7,10);
             this.coconutGroup.callAll('anchor.setTo','anchor',0.5,0.5);
             this.coconutGroup.callAll('body.gravity.set','body.gravity',0,500);
             this.coconutGroup.callAll('body.bounce.set','body.bounce',1);
             this.coconutGroup.setAll('body.checkCollision.left',false); 
             this.coconutGroup.setAll('body.checkCollision.right',false); 
             this.coconutGroup.setAll('body.checkCollision.up',false); 
            
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
            
            game.time.events.loop(this.coconutLoopTime,this.handleCoconut,this);
        },
        
        handleCoconut: function(){
            var coco = this.coconutGroup.getFirstDead();
            if(coco){ 
                var x = game.rnd.integerInRange(60,300);
                var y = this.y; // bug can be raised here
                coco.reset(x,y+100);
                return;
            }
        },
    
        killCoconuts: function(coco){
            if(coco.y>game.height+game.camera.y){
                coco.kill();
            }
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
              //  elem.anchor.setTo(0.5,0.5);
               // elem.reset(this.x+20,this.y);
            }
            return;
        },

        update: function(){
             this.fruitsGroup.forEachAlive(this.handleFruits,this);
             this.coconutGroup.forEachAlive(this.killCoconuts,this);    
        },

        render: function(){
            game.debug.text('fruitGroup countLiving : '+this.fruitsGroup.countLiving(),32,400);

        }
    }

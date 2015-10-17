var fruits = function(game){
    this.fruitYMin = 99999;
};


    fruits.prototype = {
        
        create: function(){
    
            var fruitsArray = new Array('fruit0','fruit1','fruit2','fruit3','fruit4');
            this.fruitsGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);
            
            this.fruitsGroup.createMultiple(3,'fruit0',null,false);
            this.fruitsGroup.createMultiple(3,'fruit1',null,false);
            this.fruitsGroup.createMultiple(3,'fruit2',null,false);
            this.fruitsGroup.createMultiple(3,'fruit3',null,false);
            this.fruitsGroup.createMultiple(3,'fruit4',null,false);
            
            this.fruitsGroup.setAll('anchor.setTo',0.5,0.5);
            this.fruitsGroup.setAll('body.immovable',true);
            
            //this.initialFruits();
        },
        
        initialFruits: function(){
           var fruit;
            for(var i=1;i<=15;i++){
                fruit = this.fruitsGroup.getFirstDead();
                fruit.anchor.setTo(0.5,0.5);
                var x = game.rnd.integerInRange(30,320);
                var y = game.rnd.integerInRange(100,450);
                fruit.reset(x,y);
            }
        },
        
        handleFruits: function(elem){
        var flag = false;
        this.min = game.camera.y;
        this.max = game.camera.y+game.height;
        this.y = game.rnd.integerInRange(this.min,this.min-100);
        this.x = game.rnd.integerInRange(30,330);    
            var kill = Math.abs(this.max);
            
            if(elem.y>game.height+game.camera.y){
               // console.log(elem.y+' killed '+this.max);
                elem.kill();
                this.fruitsGroup.forEachDead(this.createFruits,this);
            }
           
        },
        
        createFruits: function(elem){
            var tmp = this.fruitsGroup.getFirstDead();
            if(tmp){
                tmp.reset(this.x,this.y);
            }
            
        },
        
        update: function(){
           // this.handleFruits();    
             this.fruitsGroup.forEachAlive(this.handleFruits,this);
           // this.fruitsGroup.forEachAlive(this.debugElem,this);
        },
        
        render: function(){
            game.debug.text('fruitGroup countLiving : '+this.fruitsGroup.countLiving(),32,400);
            //game.debug.text(this.min+' '+this.max,32,400);
        }
    }
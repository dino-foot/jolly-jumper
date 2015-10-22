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
            this.fruitsGroup.callAll('body.setSize','body',25,25,0,2);
            
        },

        initialFruits: function(){
           var fruit;
            for(var i=1;i<=10;i++){
                fruit = this.fruitsGroup.getFirstDead();
                var x = game.rnd.integerInRange(30,320);
                var y = game.rnd.integerInRange(20,400);
                fruit.reset(x,y);
            }
        },

        handleFruits: function(elem){

        this.min = game.camera.y;
        this.max = game.camera.y+game.height;
        this.y = game.rnd.integerInRange(this.min,this.min-400);
        this.x = game.rnd.integerInRange(20,330);

            if(elem.y>game.height+game.camera.y){
                elem.kill();
                this.shuffleArray(this.fruitsGroup);
                this.fruitsGroup.forEachDead(this.createFruits,this);
            }

        },

        createFruits: function(elem){

            var tmp = this.fruitsGroup.getFirstDead();
            if(tmp){
                //tmp = this.fruitsGroup.getRandom(0,10);
                elem.anchor.setTo(0.5,0.5);
                elem.reset(this.x,this.y);
            }
            return;
        },

 /**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
        shuffleArray: function(array){
          //  console.log('shuffle');
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        },

        update: function(){
             this.fruitsGroup.forEachAlive(this.handleFruits,this);

        },

        render: function(){
            game.debug.text('fruitGroup countLiving : '+this.fruitsGroup.countLiving(),32,400);

        }
    }

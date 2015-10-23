var Score = function(game){
    
};


    Score.prototype = {
      
        create: function(){
            
               this.createScore();    
        },
        
        createScore: function(){
            
            var scoreFont = "50px Arial";
            this.scoreLabel = game.add.text(game.world.centerX,game.height-100,'0',{font: scoreFont, fill: '#ffffff', stroke: '#535353', strokeThickness: 10});
            this.scoreLabel.anchor.setTo(0.5,0.5);
            this.scoreLabel.fixedToCamera = true;
            this.scoreLabel.align = 'center';
            
            this.scoreLabelTween = game.add.tween(this.scoreLabel.scale).to({x:1.5,y:1.5},200,Phaser.Easing.Linear.In).to({x:1, y:1},200,Phaser.Easing.Linear.In);
        
            
        },
        
        createAnimation : function(){
            
        },
        
        update: function(){
            
        },
        
        render: function(){
            
        }
    };
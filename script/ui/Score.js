var Score = function(game){
    game.global.score = 0;
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
        
        createAnimation : function(x,y,message,score){
            
            var scoreFont = '40px Arial';
            // create a new label for the score
            var scoreAnimation = game.add.text(x,y,message,{font: scoreFont, fill: '39d179', stroke: '#ffffff', strokeThickness: '10'});
            scoreAnimation.anchor.setTo(0.5,0.5);
            scoreAnimation.align = 'center';
            
            var scoreTween = game.add.tween(scoreAnimation).to({x: game.world.centerX, y:game.height-150},800,Phaser.Easing.Exponential.In,true);
            
            scoreTween.onComplete.add(function(){
                scoreAnimation.destroy();
                this.scoreLabelTween.start();
                
            },game);
        },
        
        update: function(){
            this.scoreLabel.text = game.global.score;
        },
        
        render: function(){
            
        }
    };






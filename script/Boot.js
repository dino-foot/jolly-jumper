var bootState = function(game){
   // console.log("current state : "+'bootState');
    
    
};

    bootState.prototype = {
        
        init: function(){
            
            console.log(game.state.getCurrentState());
                
            if (this.game.device.desktop){
            
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.setGameSize(this.game.width,this.game.height);
                this.scale.setMinMax(250,380,320,480); // (minwidth,minheight,maxwidth,maxheight)
                this.scale.updateLayout(true);
                this.scale.refresh();
                
                }
            
            else{
                
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.setMinMax(260,480,330,550);        
                this.scale.forceOrientation(false,true);//(landscape,portrait)
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
                this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
                this.scale.updateLayout(true);
                this.scale.refresh();
                
                }
            
        },
        
        enterIncorrectOrientation: function(){
            document.getElementById('orientation').style.display = 'block';
        },
        
        leaveIncorrectOrientation: function(){
            document.getElementById('orientation').style.display = 'none';
        },
        
        preload: function(){
           // loading bar goes here          
        },
        
        create: function(){
            
            
            this.state.start('Preload');
        }
        
    }
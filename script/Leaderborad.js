var leaderboardState = function(game){
    this.game = game;
    this.retriveData = 'Player';
    this.restartBtn;
    this.menuBtn;
    
    this.style = { font: "bold 34px Arial", fill: "#fff", tabs: [ 100, 300 ] };
    this.textStyle = { font: "28px Comic Sans MS",stroke: '#ffffff', strokeThickness: 4, fill: "#BE5446", tabs: [ 100, 300 ] };
    this.styleTextH = { font: "bold 58px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 36px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    
};


leaderboardState.prototype = {
    
    create: function(){
        console.log('Leaderboard State');
        this.game.stage.backgroundColor = '#373F6C';
        game.global.menuBgSound.stop();
        
        this.buildInterface();
        
        this.showScore();
        
    },
    
    buildInterface: function(){
        
	//User Inteface
		var bar = this.add.graphics();
	    bar.beginFill(0xfae013);
	    bar.drawRect(0, 0, this.game.width, 75);
	    bar.endFill();

	    bar.beginFill(0x49B8E7, 1);
	    bar.drawRect(0, 75, this.game.width, 10);
	    bar.endFill();        

	    bar = this.add.graphics();
	    bar.beginFill(0x6ac8ed, 1);
	    bar.drawRect(0, 85, this.game.width, 10);
	    bar.endFill();        

		var barBottom = this.add.graphics();
	    barBottom.beginFill(0x6ac8ed, 1);
	    barBottom.drawRect(0, this.game.height - 100, this.game.width, 95);
	    barBottom.endFill();        

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0x49B8E7, 1);
	    barBottom.drawRect(0, this.game.height - 90, this.game.width, 90);
	    barBottom.endFill();    

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0xD3F939, 1);
	    barBottom.drawRect(0, this.game.height - 80, this.game.width, 80);
	    barBottom.endFill();

	    scoreText = this.add.text(5, 5, 'Highscore',this.styleTextH); 
		scoreText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);		    
                   
this.restartBtn = game.add.button(60,game.height-40,'restartBtn',function(){
this.game.state.start('Play');
},this);
        this.restartBtn.anchor.setTo(0.5,0.5);
        this.restartBtn.scale.setTo(0.5,0.5);
        this.restartBtn.input.useHandCursor = true;
        
        this.menuBtn = game.add.button(300,game.height-40,'menuBtn',function(){
this.game.state.start('Menu');
},this);
        this.menuBtn.anchor.setTo(0.5,0.5);
        this.menuBtn.scale.setTo(0.8,0.8);
        this.menuBtn.input.useHandCursor = true;
        
    },
     
        showScore: function(){
        var playerScore;
             
            if(localStorage.getItem('highscore')===null){
                localStorage.setItem('highscore',game.global.score);
            }
            else if(game.global.score>localStorage.getItem('highscore')){
                  localStorage.setItem('highscore',game.global.score);        
            }
                    
                playerScore = this.add.text(this.world.centerX,180,'Highscore - '+localStorage.getItem('highscore'),this.textStyle);
                playerScore.anchor.setTo(0.5,0.5);
            
     var currentScore = this.add.text(this.world.centerX,250,'Your Score - '+game.global.score,this.textStyle);
            currentScore.anchor.setTo(0.5);
            
            
        } // end showScore
    
    
}
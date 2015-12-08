var leaderboardState = function(game){
    this.game = game;
    this.retriveData = 'Player';
    this.restartBtn;
    this.menuBtn;
    
    this.style = { font: "bold 28px Arial", fill: "#fff", tabs: [ 100, 300 ] };
    this.textStyle = { font: "22px Comic Sans MS",stroke: '#ffffff', strokeThickness: 4, fill: "#BE5446", tabs: [ 100, 300 ] };
    this.styleTextH = { font: "bold 58px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.styleTextH2 = { font: "bold 36px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    
};


leaderboardState.prototype = {
    
    create: function(){
        console.log('Leaderboard State');
        this.game.stage.backgroundColor = '#373F6C';
        
        this.buildInterface();
        var playerName1 = prompt('Tell Us Your Name ','nick name');
        
        var player1 = {
            name: playerName1,
            score: game.global.score
        }
        localStorage.setItem('player1',JSON.stringify(player1));
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

	    scoreText = this.add.text(5, 5, 'Score',this.styleTextH); 
		scoreText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);		
        
			  var Name = this.add.text(80,140,'Name',this.style);
              Name.anchor.setTo(0.5,0.5);
			  var Score = this.add.text(250,140,'Score',this.style);
              Score.anchor.setTo(0.5,0.5);
        
                   
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
    
      // handle player current score 
        showScore: function(){
            
        var retriveDate = localStorage.getItem('player1');
        var player1 = JSON.parse(retriveDate);
        //console.log(data.name);
        
          var playerName = this.add.text(70,180,player1.name,this.textStyle);
          playerName.anchor.setTo(0.5,0.5);
          var playerScore = this.add.text(255,180,player1.score,this.textStyle);
          playerScore.anchor.setTo(0.5,0.5);    
            
        }
    
    
}
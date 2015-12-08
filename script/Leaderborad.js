var leaderboardState = function(game){
    this.game = game;
};


leaderboardState.prototype = {
    
    create: function(){
        console.log('Leaderboard State');
        this.game.stage.backgroundColor = '#373F6C';
        
        this.buildInterface();
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
	    barBottom.drawRect(0, this.game.height - 60, this.game.width, 60);
	    barBottom.endFill();        

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0x49B8E7, 1);
	    barBottom.drawRect(0, this.game.height - 50, this.game.width, 50);
	    barBottom.endFill();    

	    barBottom = this.add.graphics();
	    barBottom.beginFill(0xfae013, 1);
	    barBottom.drawRect(0, this.game.height - 40, this.game.width, 40);
	    barBottom.endFill();

	 //   scoreText = this.add.text(5, 5, 'Ranking TOP 10', styleTextH); 
	//	scoreText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 2);

	//	easyText = this.add.text(15, 100, 'Ranking łatwy: ', styleTextH2);
	//	normalText = this.add.text(15, 415, 'Ranking normalny: ', styleTextH2);
	//	hardText = this.add.text(525, 100, 'Ranking trudny: ', styleTextH2);
	//	vhardText = this.add.text(525, 415, 'Ranking bardzo trudny: ', styleTextH2);		

			 //   var headings = ['Miejsce', 'Gracz', 'Punkty', 'Czas'];

			//    text = this.add.text(32, 150, '', style);
			//    text.parseList(headings);

			//    text = this.add.text(32, 460, '', style);
			//    text.parseList(headings);

			//    text = this.add.text(550, 150, '', style);
			//    text.parseList(headings);		

			//    text = this.add.text(550, 460, '', style);
			//    text.parseList(headings);			

    }
    
    
}
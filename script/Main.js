
    game = new Phaser.Game(350,550,Phaser.CANVAS,'gameContainer');
    //game = new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.CANVAS,'gameContainer');
				
	//Add all states
    game.state.add("boot", bootState);
    game.state.add("Preload", loadState);
    game.state.add("Menu", menuState);
    game.state.add("Help", helpState);
    game.state.add("Credit", creditState);
    game.state.add("Play", playState);
   
    //define global var
    game.global = {
        score: 0,
        fruitSound: null,
        flag: false, 
        pltYMin: null
    }    



        //Start the first state
    game.state.start("boot",true,false);
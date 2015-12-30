var gameTitle = function(game){}
gameTitle.prototype = {
  	create: function(){
	
		//var gameBG = this.game.add.sprite(0,0,"BG_one");
		
		var playButton = this.game.add.button(150,200,"bt",this.playTheGame,this);
		playButton.anchor.set(0.5,0.5);
		playButton.scale.x = 0.3;
		playButton.scale.y = 0.3;
		playButton.x = W*0.5;
		playButton.y = H*0.5;

	//	playButton.name = "play";
		
		//var TXT = this.add.bitmapText(100,playButton.y+playButton.height*0.5 + 30,'myfonts',"HIGH SCORE /",32);
		//TXT.tint = '0x014B0';
		
	/*
	COLOR = this.game.add.sprite(475,145, 'CC');
	COLOR.animations.add('color_anim',[0,1,2,3, 4, 5,6,7,8,9]);
	COLOR.animations.play('color_anim',0.3,true);
	*/
	
	},
	playTheGame: function(button){
		
		this.game.state.start("TheGame");// when clicked go to state TheGame, false , false
		
	}
	
}
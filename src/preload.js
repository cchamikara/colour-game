var preload = function(game){}
var TXT;
preload.prototype = {
	preload: function(){ 
	//loading bar
          var loadingBar = this.add.sprite(this.world.centerX,this.world.centerY+10,"_loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
	// loading TXT	  
		TXT = this.add.bitmapText(10, 10 , 'myfonts', "0%", 32);
		TXT.tint = '0xFFFFFF';
		TXT.y =this.world.centerY-35;
		TXT.x= this.world.centerX-35;
		this.load.onFileComplete.add(this.fileComplete, this);
	//assets to load
	/*
	console.log('load images');
	this.game.load.image("BG_one","assets/infos.png");
	

	//'loading textures'
	this.game.load.spritesheet('_girls', 'assets/thegirl.png',226,301,9);
	
	*/
		this.game.load.image("bt","assets/play.png");
		this.game.load.image("MC","assets/MC.png");
		this.game.load.image("MS","assets/missile.png");

	},
  	create: function(){
		this.game.state.start("GameInfo"); // when finish go to the state GameTitle
	},
	//listener to show loading % in the TXT
	fileComplete: function (progress, totalLoaded, totalFiles) {
	TXT.text = " "+progress + "%";	
}	
}
var boot = function(game){
	//console.log("%cStarting my awesome game", "color:white; background:red");
};
boot.prototype = {
	preload: function(){
	
		  this.game.stage.backgroundColor  = 0xecf0f1;
		  console.log('loading loading bar + font');
          this.game.load.image("_loading","assets/Loading.png");
		  this.game.load.bitmapFont('myfonts', 'assets/K64_0.png', 'assets/K64.fnt');
	
	},
  	create: function(){
	// make fullscreen for mobiles
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
		
		this.scale.forceOrientation(true, false);
		this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
		
		
		this.scale.setScreenSize();
	}
	else{
		var height = window.innerHeight;
		this.game.scale.maxWidth = 450;
		this.game.scale.maxHeight = height;

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.setShowAll();
		window.addEventListener('resize', function () {
			this.game.scale.refresh();
		});
		this.game.scale.refresh();
	}
		this.game.state.start("Preload");
	},
	 enterIncorrectOrientation: function () {
	alert("Please rotate your device, the game is better in LANDSCAPE mode ");
        //BasicGame.orientated = false;

       // document.getElementById('orientation').style.display = 'block';
	   

    },

    leaveIncorrectOrientation: function () {
	//alert("good orientation");

        //BasicGame.orientated = true;

        //document.getElementById('orientation').style.display = 'none';

    }
}
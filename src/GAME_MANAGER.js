W = 450;
var height = window.innerHeight;
H = height;

LEVEL1 = [{x:0, y:H*0.25,speed:1000,xf:W,yf:H*0.1}];
LEVEL2 = [{x:0, y:H*0.25,speed:1000,xf:W,yf:H*0.25},{x:0, y:H*0.3,speed:1400,xf:W,yf:H*0.5}];
LEVEL3 = [{x:0, y:H*0.2,speed:1000,xf:W,yf:H*0.2},{x:0, y:H*0.4,speed:1500,xf:W,yf:H*0.4},{x:0, y:H*0.1,speed:2000,xf:W,yf:H*0.6}];

LEVELS = [LEVEL1,LEVEL2,LEVEL3];

				var game = new Phaser.Game(W,H, Phaser.AUTO, "div_of_the_game");
				game.state.add("Boot",boot);
				game.state.add("Preload",preload);
				game.state.add("GameInfo",gameTitle);
				game.state.add("TheGame",theGame);
				game.state.add("GameOver",gameOver);
				game.state.start("Boot");

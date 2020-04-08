
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "shader",
    "width": 1200,
    "height": 800,
    "type": Phaser.AUTO,
	physics: {
        default: 'arcade',
		arcade: {
			debug: false
		}
    },
    "backgroundColor": "#88F",
    "parent": "game-container",
    "scale": {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    }
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.pack("pack", "assets/pack.json");
	}

	create() {
		this.scene.start("Scene1");
	}

}

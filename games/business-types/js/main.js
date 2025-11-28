const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: "#1e1e1e",
    parent: "game-container",
    scene: { preload, create, update }
};

new Phaser.Game(config);

function preload() {
    // Business type icons
    this.load.image("soletrader", "assets/type_soletrader.png");
    this.load.image("partnership", "assets/type_partnership.png");
    this.load.image("ltd", "assets/type_ltd.png");
    this.load.image("franchise", "assets/type_franchise.png");

    // Optional UI
    this.load.image("panel", "assets/panel_large.png");
    this.load.image("button_green", "assets/button_large_green.png");
}

function create() {
    const cx = this.cameras.main.width / 2;
    const cy = this.cameras.main.height / 2;

    this.add.text(cx, cy - 40, "Business Types", {
        fontSize: "48px",
        color: "#ffffff"
    }).setOrigin(0.5);

    this.add.text(cx, cy + 20, "Game Loaded — Add your logic here", {
        fontSize: "22px",
        color: "#ccc",
        align: "center",
        wordWrap: { width: 600 }
    }).setOrigin(0.5);
}

function update() {}
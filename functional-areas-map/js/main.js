const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: "#1e1e1e",
    parent: "game-container",
    scene: {
        preload,
        create,
        update
    }
};

new Phaser.Game(config);

function preload() {
    // Department icons
    this.load.image("hr", "assets/icon_hr.png");
    this.load.image("finance", "assets/icon_finance.png");
    this.load.image("logistics", "assets/icon_logistics.png");
    this.load.image("marketing", "assets/icon_marketing.png");
    this.load.image("operations", "assets/icon_operations.png");
    this.load.image("sales", "assets/icon_sales.png");

    // Optional UI assets
    this.load.image("panel", "assets/panel_medium.png");
    this.load.image("button", "assets/button_large_orange.png");
}

function create() {
    const cx = this.cameras.main.width / 2;
    const cy = this.cameras.main.height / 2;

    this.add.text(cx, cy - 40, "Game Loaded", {
        fontSize: "48px",
        color: "#fff"
    }).setOrigin(0.5);

    this.add.text(cx, cy + 20, "This is a placeholder. Add your game code.", {
        fontSize: "22px",
        color: "#bbb",
        align: "center",
        wordWrap: { width: 600 }
    }).setOrigin(0.5);
}

function update() {}
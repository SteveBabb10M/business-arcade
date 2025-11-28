const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: "#000000",
    parent: "game-container",
    scene: { preload, create, update }
};

new Phaser.Game(config);

function preload() {
    // Room backgrounds
    this.load.image("room1", "assets/room_bg1.jpg");
    this.load.image("room2", "assets/room_bg2.jpg");
    this.load.image("room3", "assets/room_bg3.jpg");

    // Escape objects
    this.load.image("clue_envelope", "assets/clue_envelope.png");
    this.load.image("clue_stamp", "assets/clue_stamp.png");
    this.load.image("escape_key", "assets/escape_key.png");
    this.load.image("escape_lightbulb", "assets/escape_lightbulb.png");
    this.load.image("door_locked", "assets/door_locked.png");

    // Mystery board items
    this.load.image("note_square", "assets/note_square.png");
    this.load.image("string", "assets/string_connection.png");
    this.load.image("pin", "assets/evidence_pin_blue.png");
    this.load.image("magnifying_glass", "assets/magnifying_glass.png");

    // Token link
    this.load.image("token_link", "assets/token_link.png");
}

function create() {
    this.add.image(640, 360, "room1");

    this.add.text(640, 680, "Escape Room Loaded — Add your logic here", {
        fontSize: "24px",
        color: "#ffffff"
    }).setOrigin(0.5);
}

function update() {}
title = "Teleporto";

description = `
  Teleport to avoid 

  the blocks!
`;

characters = [
//player (a)
`
cccccc
c cc c 
c cc c 
cccccc
cccccc
c    c
`, 
//enemy blocks (b)
`
rrrrrr
rrrrrr
rrrrrr
rrrrrr
`,
//Teleport blocks (c)
`
yyyyyy
yyyyyy
yyyyyy
yyyyyy

`,

//Teleport blocks (d)
`
yyyyyy
yyyyyy
yyyyyy
yyyyyy
`,

//Teleport blocks (e)
`
yyyyyy
yyyyyy
yyyyyy
yyyyyy
`,

//Teleport blocks (f)
`
yyyyyy
yyyyyy
yyyyyy
yyyyyy
`,

];


const settings = {
	WIDTH: 300,
	HEIGHT: 150,

	Enemy_Speed: 1.0

};

options = {
	viewSize: {x: settings.WIDTH, y: settings.HEIGHT},
    isCapturing: true,
    isCapturingGameCanvasOnly: true,
    captureCanvasScale: 2,
    seed: 4848,
    //isPlayingBgm: true,
    isReplayEnabled: true,
    //theme: "shapeDark"
};

/**
 * @typedef {{
 * pos: Vector,
 * }} Player
 */

/**
 * @type { Player }
 */
let Player;

/**
 * @typedef {{
 * pos: Vector,
 * }} Block
 */

/**
 * @type { Block }
 */
let Block;


/**
 * @typedef {{
 * pos: Vector,
 * }} Block2
 */

/**
 * @type { Block2 }
 */
let Block2;

/**
 * @typedef {{
 * pos: Vector,
 * }} Block3
 */

/**
 * @type { Block3 }
 */
let Block3;

/**
 * @typedef {{
 * pos: Vector,
 * }} Block4
 */

/**
 * @type { Block4 }
 */
let Block4;


/**
 * @typedef {{
 * pos: Vector,
 * speed: number
 * }} enemy
 */

/**
 * @type { enemy }
 */
let enemy;

let position;

// The game loop function
function update() {
    // The init function running at startup
	if (!ticks) {

		enemy = {
			pos: vec(settings.WIDTH * 0.5, settings.HEIGHT),
			speed: rnd(0, settings.Enemy_Speed)
		};

		Player = {
            pos: vec(settings.WIDTH * 0.5/2, settings.HEIGHT * 0.5)
        };

        Block = {
            pos: vec(settings.WIDTH * 0.5/2, settings.HEIGHT * 0.5)
        };

		Block2 = {
            pos: vec(settings.WIDTH * 0.75, settings.HEIGHT * 0.5)
        };

		Block3 = {
            pos: vec(settings.WIDTH * 0.5, settings.HEIGHT * 0.5/2)
        };

		Block4 = {
            pos: vec(settings.WIDTH * 0.5, settings.HEIGHT * 0.75)
        };
	}

	//try to spawn enemies
	color ("black");
    char("b", enemy.pos);
	enemy.pos.y -= settings.Enemy_Speed;

	if(input.isJustPressed) {
		//play("coin");
		if (Player.pos == Block.pos) {
			position = Block3.pos;
		}
		else if (Player.pos == Block3.pos) {
			position = Block2.pos;
		}
		else if (Player.pos == Block2.pos) {
			position = Block4.pos;
		}
		else {
			position = Block.pos
		}
		Player.pos = position;
	}

	//Draw First Block
    color ("black");
    char("c", Block.pos);

	//Draw Second Block
	color ("black");
    char("d", Block2.pos);

	//Draw 3rd Block
	color ("black");
    char("e", Block3.pos);

	//Draw 4th Block
	color ("black");
    char("f", Block4.pos);

	//Draw Player
	color ("black");
    char("a", Player.pos);
}
